CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  emp_id VARCHAR(20) UNIQUE NOT NULL,
  full_name VARCHAR(150) NOT NULL,
  gender VARCHAR(10) NOT NULL CHECK (gender IN ('Male', 'Female')),
  department VARCHAR(100),
  role VARCHAR(100),
  status VARCHAR(20) NOT NULL DEFAULT 'Active',
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE activity_form_options (
  id SERIAL PRIMARY KEY,
  category VARCHAR(50) NOT NULL,
  label VARCHAR(150) NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE activities (
  id SERIAL PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  start_at TIMESTAMP NOT NULL,
  end_at TIMESTAMP NOT NULL,
  register_close_at TIMESTAMP NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'Open',
  created_by VARCHAR(50),
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE activity_registrations (
  id SERIAL PRIMARY KEY,
  activity_id INTEGER NOT NULL REFERENCES activities(id) ON DELETE CASCADE,
  employee_id INTEGER NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
  bike_location_option_id INTEGER REFERENCES activity_form_options(id),
  travel_mode_option_id INTEGER REFERENCES activity_form_options(id),
  company_vehicle_option_id INTEGER REFERENCES activity_form_options(id),
  drink_option_id INTEGER REFERENCES activity_form_options(id),
  note TEXT,
  registered_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE budget_plans (
  id SERIAL PRIMARY KEY,
  month_year DATE NOT NULL,
  submit_open_date DATE NOT NULL,
  submit_close_date DATE NOT NULL,
  submit_limit INTEGER NOT NULL DEFAULT 1,
  created_by VARCHAR(50),
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE budget_levels (
  id SERIAL PRIMARY KEY,
  budget_plan_id INTEGER NOT NULL REFERENCES budget_plans(id) ON DELETE CASCADE,
  gender VARCHAR(10) NOT NULL CHECK (gender IN ('Male', 'Female')),
  level_name VARCHAR(100) NOT NULL,
  amount NUMERIC(12, 2) NOT NULL,
  target_metrics TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE budget_level_conditions (
  id SERIAL PRIMARY KEY,
  budget_level_id INTEGER NOT NULL REFERENCES budget_levels(id) ON DELETE CASCADE,
  condition_text TEXT NOT NULL
);

CREATE TABLE budget_requests (
  id SERIAL PRIMARY KEY,
  employee_id INTEGER NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
  budget_plan_id INTEGER NOT NULL REFERENCES budget_plans(id) ON DELETE CASCADE,
  selected_level_id INTEGER NOT NULL REFERENCES budget_levels(id),
  eligible_amount NUMERIC(12, 2) NOT NULL,
  requested_amount NUMERIC(12, 2) NOT NULL,
  carryover_amount NUMERIC(12, 2) NOT NULL DEFAULT 0,
  checklist_confirmations JSONB,
  consent BOOLEAN NOT NULL DEFAULT FALSE,
  status VARCHAR(20) NOT NULL DEFAULT 'Pending',
  hr_approver VARCHAR(50),
  hr_note TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  UNIQUE (employee_id, budget_plan_id)
);

CREATE TABLE purchase_claims (
  id SERIAL PRIMARY KEY,
  employee_id INTEGER NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
  claim_month DATE NOT NULL,
  amount NUMERIC(12, 2) NOT NULL,
  category VARCHAR(100),
  description TEXT,
  attachment_url TEXT,
  status VARCHAR(20) NOT NULL DEFAULT 'Pending',
  hr_approver VARCHAR(50),
  hr_note TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE support_wallets (
  id SERIAL PRIMARY KEY,
  employee_id INTEGER NOT NULL REFERENCES employees(id) ON DELETE CASCADE,
  available_balance NUMERIC(12, 2) NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  UNIQUE (employee_id)
);

CREATE TABLE wallet_ledger (
  id SERIAL PRIMARY KEY,
  wallet_id INTEGER NOT NULL REFERENCES support_wallets(id) ON DELETE CASCADE,
  entry_type VARCHAR(50) NOT NULL,
  amount NUMERIC(12, 2) NOT NULL,
  note TEXT,
  reference_id VARCHAR(50),
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
