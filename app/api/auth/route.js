import User from "@/models/Users";
import NextAuth from "next-auth/next";
import db from "../../utils/db";
import { bcrypt } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
	endpoint: "/api/auth/session",
	session: {
		strategy: "jwt",
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user?._id) token._id = user._id;
			if (user?._Admin) token._isAdmin = user.isAdmin;
			return token;
		},
		async session({ session, token }) {
			if (token?._id) session.user._id = token._id;
			if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
			return session;
		},
	},
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				await db.connect();
				const user = await User.findOne({
					email: credentials.email,
				});
				await db.disconnect();
				if (user && bcrypt.compareSync(credentials.password, user.password)) {
					return {
						_id: user._id,
						name: user.name,
						email: user.email,
						image: "f",
						isAdmin: user.isAdmin,
					};
				}
				throw new Error("Email and or password is incorrect");
			},
		}),
	],
});
commit 1a1adf1797bdb1c4673e0862a11182b5c360c6b0