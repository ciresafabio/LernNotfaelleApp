import { enumType, objectType, extendType, intArg, nonNull } from "nexus";

const Gender = enumType({
  name: "Gender",
  members: ["M", "F", "X"],
});

const TriageGroup = enumType({
  name: "TriageGroup",
  members: ["I", "II", "III", "IV"],
});

export const Trauma = objectType({
  name: "Trauma",
  definition(t) {
    t.string("id");
    t.string("diagnose");
    t.string("location");
    t.string("makeup");
    t.field("gender", { type: Gender });
    t.string("a");
    t.string("b");
    t.string("c");
    t.string("d");
    t.string("eSampleTraumacheck");
    t.string("eMonitoring");
    t.nullable.string("firstAid");
    t.nullable.string("paramedicAid");
    t.nullable.string("emergencyDoctor");
    t.field("triageGroup", { type: TriageGroup });
  },
});

export const TraumataQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("traumata", {
      type: "Trauma",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.trauma.findMany();
      },
    });
  },
});

export const RandomTraumataQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("randomTraumata", {
      type: "Trauma",
      args: {
        n: nonNull(intArg()),
      },
      async resolve(_parent, args, ctx) {
        const traumata = await ctx.prisma.trauma.findMany();
        traumata.sort(() => 0.5 - Math.random());
        return traumata.slice(0, args.n);
      },
    });
  },
});
