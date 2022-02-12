import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessionalCountAggregate } from "../outputs/ProfessionalCountAggregate";
import { ProfessionalMaxAggregate } from "../outputs/ProfessionalMaxAggregate";
import { ProfessionalMinAggregate } from "../outputs/ProfessionalMinAggregate";

@TypeGraphQL.ObjectType("AggregateProfessional", {
  isAbstract: true
})
export class AggregateProfessional {
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
