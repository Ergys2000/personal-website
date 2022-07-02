import React, { ReactElement } from 'react';
import { NavBar, NavBarItem } from '../components/general/NavBar';

export default ({ children }: {children: React.ReactElement[] | ReactElement}) => {
    return (
        <div className="flex w-screen h-screen">
			<NavBar>
				<NavBarItem url={`/main/`} iconName="home" tooltip="Home" />
				<NavBarItem url={`/main/wiki`} iconName="article" tooltip="Wiki" />
				<NavBarItem url={`/login`} iconName="logout" tooltip="Logout" />
			</NavBar>
            <div className="w-full h-full overflow-auto">
                {children}
            </div>
		</div>
    );
}