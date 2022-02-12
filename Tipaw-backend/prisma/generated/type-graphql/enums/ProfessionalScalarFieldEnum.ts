import * as TypeGraphQL from "type-graphql";

export enum ProfessionalScalarFieldEnum {
  id = "id",
  firstname = "firstname",
  lastname = "lastname",
  langue = "langue",
  title = "title",
  email = "email",
  seo = "seo",
  description = "description",
  address = "address",
  picture = "picture",
  paimentOption = "paimentOption",
  appointmentSchedule = "appointmentSchedule"
}
TypeGraphQL.registerEnumType(ProfessionalScalarFieldEnum, {
  name: "ProfessionalScalarFieldEnum",
  description: undefined,
});
