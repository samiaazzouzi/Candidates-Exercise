import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessionalCreateInput } from "../../../inputs/ProfessionalCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProfessionalArgs {
  @TypeGraphQL.Field(_type => ProfessionalCreateInput, {
    nullable: false
  })
  data!: ProfessionalCreateInput;
}
