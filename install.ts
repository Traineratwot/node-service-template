import service, {AddOptions} from "os-service";
import path                  from "path";

const main = process.env.npm_package_main ?? 'index.js';
const name = process.env.npm_package_name ?? path.basename(__dirname)

const options: AddOptions = {
	displayName: process.env.npm_package_description,
	programPath: path.join(__dirname, main)
};

service.add(name, options, function (error) {
	if (error)
		console.trace(error);
});