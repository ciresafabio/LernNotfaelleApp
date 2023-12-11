import { PrismaClient, Gender, TriageGroup } from "@prisma/client";
import { traumata } from "../data/traumata";
const prisma = new PrismaClient();

const ts = [];
traumata.forEach((trauma) => {
  let t = {
    ...trauma,
    gender: Gender[trauma.gender],
    triageGroup: TriageGroup[trauma.triageGroup],
  };
  ts.push(t);
});

async function main() {
  await prisma.trauma.deleteMany({});

  await prisma.trauma.createMany({
    data: ts,
  });

  // for (var i = 0; i < 50; i++) {
  //   await prisma.trauma.create({
  //     data: {
  //       location: (Math.random() + 1).toString(36).substring(7),
  //       triageGroup:
  //         TriageGroup[
  //           Object.keys(TriageGroup)[
  //             Math.floor(Math.random() * Object.keys(TriageGroup).length)
  //           ]
  //         ],
  //       gender:
  //         Gender[
  //           Object.keys(Gender)[
  //             Math.floor(Math.random() * Object.keys(Gender).length)
  //           ]
  //         ],
  //     },
  //   });
  // }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
