create table form_submissions (
  id uuid default gen_random_uuid() primary key,
  form_type text not null,
  data jsonb not null,
  submitted_at timestamptz not null default now()
);
