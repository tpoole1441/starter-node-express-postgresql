const suppliers = require("../fixtures/suppliers");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw("TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE");
  await knex("suppliers").insert(suppliers);
};
