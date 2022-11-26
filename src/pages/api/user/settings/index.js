import prisma from "../../../../../lib/prisma";

import { getToken } from "next-auth/jwt";
export default async function handle(req, res) {
  const token = await getToken({ req });

  if (req.method === "POST") {
    // var body = JSON.parse(req.body);
    var body = JSON.parse(JSON.stringify(req.body));
    // console.log(JSON.parse(JSON.stringify(req.body)));
    const updateUser = await prisma.user.update({
      where: {
        id: token.sub,
      },
      data: {
        rank: Number(body.rank),
        medals: Number(body.medals),
        archivements: Number(body.archivements),
        location: body.location,
        member_type: Number(body.member_type),
        pilot_license: body.pilot_license,
        branch: {
          update: {
            where: {
              userId: token.sub,
            },
            data: {
              defence: body.defence,
              core: body.core,
              fronttiers: body.fronttiers,
              relief: body.relief,
              skyline: body.skyline,
            },
          },
        },
        ships: {
          update: {
            where: {
              userId: token.sub,
            },
            data: {},
          },
        },
      },
    });
    // console.log(updateUser);
    res.send("OK");
  } else {
    res.send("OK");
  }
}
