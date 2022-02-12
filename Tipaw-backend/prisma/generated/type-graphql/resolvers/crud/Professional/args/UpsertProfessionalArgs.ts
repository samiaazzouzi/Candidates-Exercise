import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessionalCreateInput } from "../../../inputs/ProfessionalCreateInput";
import { ProfessionalUpdateInput } from "../../../inputs/ProfessionalUpdateInput";
import { ProfessionalWhereUniqueInput } from "../../../inputs/ProfessionalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertProfessionalArgs {
  @TypeGraphQL.Field(_type => ProfessionalWhereUniqueInput, {
    nullable: false
  })
  where!: ProfessionalWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfessionalCreateInput, {
    nullable: false
  })
  create!: ProfessionalCreateInput;

  @TypeGraphQL.Field(_type => ProfessionalUpdateInput, {
    nullable: false
  })
  update!: ProfessionalUpdateInput;
}
