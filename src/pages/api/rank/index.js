import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    // console.log(body)

    const findUser = await prisma.rank.findMany({
      where: {
        id: body.id,
      },
    });
    // console.log(findUser);
    res.send(findUser);
  } else {
    const findUser = await prisma.rank.findMany();
    // console.log(findUser);
    res.send(findUser);
  }
}
