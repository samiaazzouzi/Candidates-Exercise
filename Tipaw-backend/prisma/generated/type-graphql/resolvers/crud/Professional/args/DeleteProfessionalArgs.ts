import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessionalWhereUniqueInput } from "../../../inputs/ProfessionalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteProfessionalArgs {
  @TypeGraphQL.Field(_type => ProfessionalWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessionalWhereUniqueInput;
}
