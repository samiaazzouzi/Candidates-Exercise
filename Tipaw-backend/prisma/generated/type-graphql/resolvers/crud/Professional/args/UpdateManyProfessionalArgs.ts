import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfessionalUpdateManyMutationInput } from "../../../inputs/ProfessionalUpdateManyMutationInput";
import { ProfessionalWhereInput } from "../../../inputs/ProfessionalWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProfessionalArgs {
  @TypeGraphQL.Field(_type => ProfessionalUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProfessionalUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProfessionalWhereInput, {
    nullable: true
  })
  where?: ProfessionalWhereInput | undefined;
}
