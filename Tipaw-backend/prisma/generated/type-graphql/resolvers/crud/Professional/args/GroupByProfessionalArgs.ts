import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessionalOrderByWithAggregationInput } from "../../../inputs/ProfessionalOrderByWithAggregationInput";
import { ProfessionalScalarWhereWithAggregatesInput } from "../../../inputs/ProfessionalScalarWhereWithAggregatesInput";
import { ProfessionalWhereInput } from "../../../inputs/ProfessionalWhereInput";
import { ProfessionalScalarFieldEnum } from "../../../../enums/ProfessionalScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProfessionalArgs {
  @TypeGraphQL.Field(_type => ProfessionalWhereInput, {
    nullable: true
  })
  where?: ProfessionalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProfessionalOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ProfessionalOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessionalScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "firstname" | "lastname" | "langue" | "title" | "email" | "seo" | "description" | "address" | "picture" | "paimentOption" | "appointmentSchedule">;

  @TypeGraphQL.Field(_type => ProfessionalScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProfessionalScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
