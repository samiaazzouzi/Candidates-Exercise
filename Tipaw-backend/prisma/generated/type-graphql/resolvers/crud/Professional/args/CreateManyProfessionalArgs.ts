import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessionalCreateManyInput } from "../../../inputs/ProfessionalCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProfessionalArgs {
  @TypeGraphQL.Field(_type => [ProfessionalCreateManyInput], {
    nullable: false
  })
  data!: ProfessionalCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
