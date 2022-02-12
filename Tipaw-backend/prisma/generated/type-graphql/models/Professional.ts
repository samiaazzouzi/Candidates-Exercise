import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Professional", {
  isAbstract: true
})
export class Professional {
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
}
