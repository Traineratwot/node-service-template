import service from "os-service";
import path    from "path";

const name = process.env.npm_package_name ?? path.basename(__dirname)

service.remove(name, function (error) {
	if (error) {
		console.trace(error);
	}
});