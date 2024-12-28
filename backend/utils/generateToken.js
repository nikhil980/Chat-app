import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, "cb793b09b7fa71046b78d2331b52dcb20debc5644a90678fcddcb9ce1fdbdf623b8f3c4cf34b5430829e4575978bee68510cdb45eb54858d1203e9c3d301b031", {
		expiresIn: "15d",
	});

	res.cookie("jwts", token,{
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		path: '/'
		// secure: "development" !== "development",
	} );
	
};

export default generateTokenAndSetCookie;