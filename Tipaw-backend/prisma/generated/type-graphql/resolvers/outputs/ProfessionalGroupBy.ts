import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessionalCountAggregate } from "../outputs/ProfessionalCountAggregate";
import { ProfessionalMaxAggregate } from "../outputs/ProfessionalMaxAggregate";
import { ProfessionalMinAggregate } from "../outputs/ProfessionalMinAggregate";

@TypeGraphQL.ObjectType("ProfessionalGroupBy", {
  isAbstract: true
})
export class ProfessionalGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  langue!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  seo!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  picture!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  paimentOption!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  appointmentSchedule!: string;

  @TypeGraphQL.Field(_type => ProfessionalCountAggregate, {
    nullable: true
  })
  _count!: ProfessionalCountAggregate | null;

  @TypeGraphQL.Field(_type => ProfessionalMinAggregate, {
    nullable: true
  })
  _min!: ProfessionalMinAggregate | null;

  @TypeGraphQL.Field(_type => ProfessionalMaxAggregate, {
    nullable: true
  })
  _max!: ProfessionalMaxAggregate | null;
}
