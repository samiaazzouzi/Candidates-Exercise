import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessionalOrderByWithRelationInput } from "../../../inputs/ProfessionalOrderByWithRelationInput";
import { ProfessionalWhereInput } from "../../../inputs/ProfessionalWhereInput";
import { ProfessionalWhereUniqueInput } from "../../../inputs/ProfessionalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProfessionalArgs {
  @TypeGraphQL.Field(_type => ProfessionalWhereInput, {
    nullable: true
  })
  where?: ProfessionalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProfessionalOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ProfessionalOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProfessionalWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProfessionalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
