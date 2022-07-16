import { Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { NextPage } from "next/types"
import React, { useState } from "react";
import { authenticate } from "../utils/authenticate";

const Login: NextPage = () => {
	const history = useRouter();
	const [form, setForm] = useState({
		username: '',
		password: "",
	});
	const onChange = (event: React.ChangeEvent) => {
		event.preventDefault();
		const {name, value} = event.target as any;
		setForm({...form, [name]: value})
	}
	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		console.log(form);
		authenticate(form.username, form.password).then(res => {
			if(res.status === "OK") {
				history.push(`/main`);
			} else {
				console.log(res);
			}
		}).catch(res => {
			console.log(res);
		});
	}
	return (
		<div className="bg-gray-900 w-screen h-screen flex justify-center items-center">
			<form onSubmit={onSubmit} className="bg-gray-800 h-1/2 w-1/3 rounded-xl flex flex-col items-center p-10">
				<p className="text-xl text-gray-400">Personal Website</p>
				<div className="flex flex-col items-start w-full mt-10">
					<label className="text-gray-400">Username</label>
					<Input colorScheme={"blue"} color="gray.200" name="username" value={form.username} onChange={onChange}  />
				</div>
				<div className="flex flex-col items-start w-full mt-5">
					<label className="text-gray-400">Password</label>
					<Input colorScheme={"blue"} color="gray.200" name="password" value={form.password} onChange={onChange} type="password" />
				</div>
				<Button onClick={onSubmit} colorScheme={"blue"} my="5">Log in</Button>
			</form>
		</div>
	);	
};

export default Login;
