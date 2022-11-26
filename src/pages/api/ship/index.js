import prisma from "../../../../lib/prisma";

export default async function handle(req, res) {

    if (req.method === "POST") {
      const body = JSON.parse(req.body);

      const findUser = await prisma.ship.findMany();
      res.send(findUser);
    } else {
      const findUser = await prisma.ship.findMany();
      res.send(findUser);
  }
}
