import prisma from "../../../../../lib/prisma";

import { getToken } from "next-auth/jwt";
export default async function handle(req, res) {
  const token = await getToken({ req });


  
  if (req.method === "POST") {
    var body = JSON.parse(JSON.stringify(req.body));
    console.log(body.defence == 'true' ? true : false )
    console.log(body)
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
            data: {
              defence: body.defence == 'true' ? true : false,
              core: body.core == 'true' ? true : false,
              fronttiers: body.fronttier == 'true' ? true : false,
              relief: body.relief == 'true' ? true : false,
              skyline: body.skyline == 'true' ? true : false,
            },
            where: {
              id: 1
            }
          },
        }
      },
    });
    // console.log(updateUser);
    res.send("OK");
  } else {
    res.send("OK");
  }
}
