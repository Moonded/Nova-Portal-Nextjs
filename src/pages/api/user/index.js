import prisma from "../../../../lib/prisma";

var isBranch = false;
var isShips = false;

export default async function handle(req, res) {
  if (req.method === "POST") {
    // ENDPOINT: /user [POST]
    const body = JSON.parse(req.body);

    if (body.branch == true) isBranch = true;
    if (body.ships == true) isShips = true;

    const findUser = await prisma.user.findMany({
      where: { name: body.user },
      include: {
        branch: isBranch,
        ships: isShips,
      },
    });

    res.send(findUser);
  } else {
    // ENDPOINT: /user [GET]

    if (req.query.branch) isBranch = true;
    if (req.query.ships) isShips = true;

    const findUser = await prisma.user.findMany({
      include: {
        branch: isBranch,
        ships: isShips,
      },
    });

    res.send(findUser);
  }
}
