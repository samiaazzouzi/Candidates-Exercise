import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessionalUpdateInput } from "../../../inputs/ProfessionalUpdateInput";
import { ProfessionalWhereUniqueInput } from "../../../inputs/ProfessionalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateProfessionalArgs {
  @TypeGraphQL.Field(_type => ProfessionalUpdateInput, {
    nullable: false
  })
  data!: ProfessionalUpdateInput;

  @TypeGraphQL.Field(_type => ProfessionalWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessionalWhereUniqueInput;
}
