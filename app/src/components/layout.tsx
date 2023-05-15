import NextLink from 'next/link';

import {
	Avatar,
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Flex,
	Heading,
	Icon,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	Link,
	ListItem,
	Spacer,
	UnorderedList,
	position
} from '@chakra-ui/react';
import { FiUsers, FiUser } from 'react-icons/fi';
import {
	MdSpaceDashboard,
	MdCalendarMonth,
	MdSettings,
	MdSearch,
	MdNotifications
} from 'react-icons/md';
import { IconType } from 'react-icons';

type Crumb = { href?: string; current: boolean; title: string };

type RouteItem = { title: string; label: string; url: string; icon: IconType };

const routes: RouteItem[] = [
	{
		title: 'dashboard',
		label: 'dashboard',
		url: '/',
		icon: MdSpaceDashboard
	},
	{
		title: 'plannings',
		label: 'plannings',
		url: '/plannings',
		icon: MdCalendarMonth
	},
	{
		title: 'teammates',
		label: 'collaborateurs',
		url: '/teammates',
		icon: FiUsers
	},
	{
		title: 'profile',
		label: 'profil',
		url: '/profile',
		icon: FiUser
	},
	{
		title: 'settings',
		label: 'paramètres',
		url: '/settings',
		icon: MdSettings
	}
];

export function Layout({ children, ...props }: { children: JSX.Element }) {
	return (
		<>
			<Flex
				w={'100%'}
				minH={'100vh'}
				justifyContent={'flex-end'}
				backgroundColor={'#f5f6fa'}
				position={'relative'}>
				<Box
					backgroundColor={'white'}
					fontSize={'1.125rem'}
					minH={'100vh'}
					position={'fixed'}
					inset={0}
					maxWidth={'15.625%'}
					pl={14}
					pr={14}
					pt={14}
					as={'nav'}
					flexDirection={'column'}>
					<Box pb={20} pl={4} textAlign="center">
						<svg
							width="23"
							height="42"
							viewBox="0 0 23 42"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1 32.8138V1C8.04516 1 10.1075 7.44035 10.2581 10.6605V32.8138H22C21.5986 35.5425 18.8763 41 11.1989 41C3.52151 41 1.20072 35.5425 1 32.8138Z"
								fill="#292448"
							/>
							<path
								d="M7.20968 10.6605H21.3979C21.3979 17.8923 15.3513 20.0107 12.328 20.1659H7.20968C3.50645 20.1659 1.52688 23.3214 1 24.8991V16.4025C1 12.1193 5.13979 10.7898 7.20968 10.6605Z"
								fill="#292448"
							/>
							<path
								d="M1 32.8138V1C8.04516 1 10.1075 7.44035 10.2581 10.6605V32.8138H22C21.5986 35.5425 18.8763 41 11.1989 41C3.52151 41 1.20072 35.5425 1 32.8138Z"
								stroke="#292448"
							/>
							<path
								d="M7.20968 10.6605H21.3979C21.3979 17.8923 15.3513 20.0107 12.328 20.1659H7.20968C3.50645 20.1659 1.52688 23.3214 1 24.8991V16.4025C1 12.1193 5.13979 10.7898 7.20968 10.6605Z"
								stroke="#292448"
							/>
						</svg>
					</Box>
					<UnorderedList spacing={10} alignItems="center" listStyleType="none">
						{routes.map((route, index) => (
							<ListItem key={index}>
								<Link
									display="flex"
									position="relative"
									justifyContent="start"
									alignItems="center"
									_activeLink={{
										'::after': {
											content: '""',
											backgroundColor: '#23235F',
											position: 'absolute',
											right: '-56px',
											top: 0,
											bottom: 0,
											width: ' 4px',
											height: '100%',
											display: 'block',
											borderTopLeftRadius: '8px',
											borderBottomLeftRadius: '8px'
										}
									}}
									as={NextLink}
									aria-current={children.props?.currentPage === route.title ? 'page' : undefined}
									href={route.url}
									gap={2}>
									<Icon as={route.icon} color={'#23235F'} />
									{route.label}
								</Link>
							</ListItem>
						))}
					</UnorderedList>
				</Box>
				<Box w="calc(100% - 15.625%)" h="100%">
					<Flex pt={14} pb={3} pl={20} pr={20} as="header" maxH="134px" alignItems="center">
						<Flex flex={2} justifyContent="space-between">
							<Box>
								<Breadcrumb fontWeight={'normal'} fontSize="sm">
									{children?.props?.breadcrumbs?.map((crumb: Crumb, index: number) => (
										<BreadcrumbItem key={index}>
											<BreadcrumbLink
												{...(crumb?.href ? { href: crumb.href } : { as: 'span' })}
												isCurrentPage={crumb?.current ?? false}>
												{crumb.title}
											</BreadcrumbLink>
										</BreadcrumbItem>
									)) ?? (
										<BreadcrumbItem>
											<BreadcrumbLink as="span">Accueil</BreadcrumbLink>
										</BreadcrumbItem>
									)}
								</Breadcrumb>
								<Heading color={'#292448'} fontSize={'2rem'}>
									{children.props?.title ?? 'Accueil'}
								</Heading>
							</Box>
						</Flex>
						<Flex flex={1} gap={4} alignItems="center" justifyContent="flex-end">
							<InputGroup minW="220px" maxW="240px">
								<Input
									placeholder="Rechercher..."
									backgroundColor="white"
									borderColor="white"
									borderRadius={20}
								/>
								<InputRightElement>
									<IconButton
										aria-label="Rechercher"
										background="white"
										borderRadius={20}
										color="#292448"
										icon={<MdSearch />}
									/>
								</InputRightElement>
							</InputGroup>
							<Button
								w={12}
								h={12}
								p={0}
								aria-label="Afficher les notifications"
								background="none"
								borderRadius="50%">
								<MdNotifications size="1.5em" />
							</Button>
							<Avatar name="Kola Tioluwani" />
						</Flex>
					</Flex>
					<Box as="main" flex={1} pl={20} pr={20} pt={3} pb={20} className="h-full">
						{children}
					</Box>
				</Box>
			</Flex>
		</>
	);
}
