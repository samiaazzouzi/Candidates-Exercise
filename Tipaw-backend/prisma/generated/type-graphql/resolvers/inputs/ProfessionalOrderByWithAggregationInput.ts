import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessionalCountOrderByAggregateInput } from "../inputs/ProfessionalCountOrderByAggregateInput";
import { ProfessionalMaxOrderByAggregateInput } from "../inputs/ProfessionalMaxOrderByAggregateInput";
import { ProfessionalMinOrderByAggregateInput } from "../inputs/ProfessionalMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProfessionalOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProfessionalOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firstname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastname?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  langue?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  seo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  picture?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  paimentOption?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  appointmentSchedule?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProfessionalCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProfessionalCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfessionalMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProfessionalMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProfessionalMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProfessionalMinOrderByAggregateInput | undefined;
}
