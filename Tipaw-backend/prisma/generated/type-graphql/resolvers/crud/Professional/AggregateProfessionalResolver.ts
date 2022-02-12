import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProfessionalArgs } from "./args/AggregateProfessionalArgs";
import { Professional } from "../../../models/Professional";
import { AggregateProfessional } from "../../outputs/AggregateProfessional";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Professional)
export class AggregateProfessionalResolver {
  @TypeGraphQL.Query(_returns => AggregateProfessional, {
    nullable: false
  })
  async aggregateProfessional(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProfessionalArgs): Promise<AggregateProfessional> {
    return getPrismaFromContext(ctx).professional.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
