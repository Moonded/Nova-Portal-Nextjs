# What is this?

This Repository is a work in progress and proof of example how the current [NOVA Intergalactic](https://novaintergalactic.com) portal would work in a different enviroment.

# How do I use this?

You don't... well not exactly, you can, if you like host this portal yourself, but that isn't encuraged.
The portal is not written to be used by everyone and thus the setup is a bit more complicated. If you still want to do it, continue reading.

# How do I setup the repo?

First of start by cloning the repo, and install everything by using `yarn`.
Afterwards, go ahead and create the [PostgresSQL](https://www.postgresql.org/) database, create the tables with [Prisma](https://www.prisma.io/) and fill the `Rank` table with 5 rows after the following sheme:

| ID  | html_name      | img                                                     |
| --- | -------------- | ------------------------------------------------------- |
| 0   | Member         | https://files.moonded.com/portal/ranks/member.png       |
| 1   | Lieutnant      | https://files.moonded.com/portal/ranks/member.png       |
| 2   | C.I.T          | https://files.moonded.com/portal/ranks/commander.png    |
| 3   | Commander      | https://files.moonded.com/portal/ranks/commander.png    |
| 4   | Wing Commander | https://files.moonded.com/portal/ranks/commander.png    |
| 5   | Admiral        | https://files.moonded.com/portal/ranks/admiral.png      |
| 6   | Fleet Admiral  | https://files.moonded.com/portal/ranks/fleetadmiral.png |
| 7   | High Command   | https://files.moonded.com/portal/ranks/highcommand.png  |

If you want you can add more rows and thus more ranks. Now that you have setup the DB you need to create a discord bot for login. Go to the [Discord Dev Portal](https://discord.com/developers/docs/intro) and create one, and copy the id and the secret into the .env provided. Don't forget to rename the exmaple.env to .env). Setup your DB connector string aswell in the .env file, likewise setup the rest of the .env file.

Now you only need to start the development Server with `yarn dev`, that should do it.

# It's not starting!

Nice you found a bug or did something wrong in the guide (or i forgot to write something down, but that would never happen.... kappa). Open a new issue where you state what should **__BE__** happening, what **__IS__** happening, and make it as informative as possible. The more you go into details the better, I can help you out. 