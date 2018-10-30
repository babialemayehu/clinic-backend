ALTER TABLE diagnoses ADD FULLTEXT diagnoses(name);
ALTER TABLE laboratory_tests ADD FULLTEXT laboratory_tests(name);
ALTER TABLE drugs ADD FULLTEXT drugs(name);
ALTER TABLE patients ADD FULLTEXT patients(reg_id, first_name, father_name, grand_father_name);

