import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessionalWhereInput } from "../../../inputs/ProfessionalWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProfessionalArgs {
  @TypeGraphQL.Field(_type => ProfessionalWhereInput, {
    nullable: true
  })
  where?: ProfessionalWhereInput | undefined;
}
