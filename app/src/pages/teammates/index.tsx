import React from 'react';
import Head from 'next/head';

import {
	Heading,
	Card,
	CardBody,
	Box,
	Button,
	Text,
	CardHeader,
	TableContainer,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	ButtonGroup,
	Tag,
	Divider,
	CardFooter,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
	HStack,
	Flex,
	List,
	Select
} from '@chakra-ui/react';
import {
	MdDeleteForever,
	MdEditDocument,
	MdOutlineFileDownload,
	MdAddCircleOutline
} from 'react-icons/md';
import TeammatesForm from '@/components/forms/teammatesForm';
import TeamForm from '@/components/forms/teamForm';

type FormName = 'none' | 'team' | 'teammate';

type TeamEntity = { id: string; title: string; color: string };

type TableFilters = { teams: TeamEntity[]; role: 'admin' | 'viewer' | ''; itemsPerPage: number };

const DEFAULT_ITEM_PER_PAGE_ARRAY = [10, 25, 50, 100];

export default function Teammates() {
	const [formName, setFormName] = React.useState<FormName>('none');
	const [filters, setFilters] = React.useState<TableFilters>({
		teams: [
			{ id: '11', title: 'Flins', color: 'yellow' },
			{ id: '22', title: 'Plaisir', color: 'purple' }
		],
		role: '',
		itemsPerPage: 10
	});
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef(null);

	const handleClick = (formName: FormName) => {
		setFormName(formName);
		onOpen();
	};

	const handleCloseDrawer = () => {
		setFormName('none');
		onClose();
	};

	const formChildrens = {
		team: {
			title: 'Créer une équipe',
			component: (
				<TeamForm
					onSubmitCb={() => {
						onClose();
					}}
					onCancelCb={() => {
						onClose();
					}}
				/>
			)
		},
		teammate: {
			title: 'Créer une collaboratrice',
			component: (
				<TeammatesForm
					onSubmitCb={() => {
						onClose();
					}}
					onCancelCb={() => {
						onClose();
					}}
				/>
			)
		},
		none: { title: '', component: <></> }
	};

	return (
		<>
			<Head>
				<title>Collaborateurs</title>
				<meta name="description" content="Collaborateurs" />
			</Head>
			<Box pt={3} w={'100%'} h={'100%'}>
				<Box h={'100%'} pt={0} className="w-full">
					<Heading
						size="md"
						color={'#292448'}
						marginBottom={4}
						display="flex"
						alignItems="center"
						justifyContent="space-between">
						Vos collaborateurs
						<ButtonGroup>
							<Button
								onClick={() => handleClick('teammate')}
								background="#292448"
								color="white"
								border="2px solid #292448"
								borderRadius="md"
								size="md"
								ref={btnRef}
								fontSize="1rem"
								leftIcon={<MdAddCircleOutline />}>
								Créer un collaborateur
							</Button>
							<Button
								onClick={() => handleClick('team')}
								background="#292448"
								color="white"
								border="2px solid #292448"
								borderRadius="md"
								size="md"
								ref={btnRef}
								fontSize="1rem"
								leftIcon={<MdAddCircleOutline />}>
								Créer une équipe
							</Button>
						</ButtonGroup>
					</Heading>
					<Card>
						<CardHeader display="flex" alignItems="center">
							<Flex>
								<HStack flex={1}>
									<Text fontSize="sm" fontWeight="bold">
										Equipes :
									</Text>
									<List>
										{filters.teams.map((team, index) => (
											<Tag
												as={'button'}
												mr={1}
												key={team?.id ?? index}
												colorScheme={team?.color ?? 'yellow'}>
												{team.title}
											</Tag>
										))}
									</List>
								</HStack>
								<Divider orientation="vertical" h="40px" ml={4} mr={4} borderColor="#292448" />
								<HStack flex={1}>
									<Text fontSize="sm" fontWeight="bold">
										Elements par page :
									</Text>
									<Select size="sm" borderRadius={8} defaultValue={filters.itemsPerPage}>
										{DEFAULT_ITEM_PER_PAGE_ARRAY.map((item, index) => (
											<option key={index} value={item}>
												{item}
											</option>
										))}
									</Select>
								</HStack>
								<Divider orientation="vertical" h="40px" ml={4} mr={4} borderColor="#292448" />
								<HStack flex={1}>
									<Text fontSize="sm" fontWeight="bold">
										Filtrer par rôle
									</Text>
									<Select size="sm" borderRadius={8}>
										<option value="admin">Admin</option>
										<option value="viewer">Viewer</option>
									</Select>
								</HStack>
							</Flex>
						</CardHeader>
						<CardBody>
							<TableContainer>
								<Table variant="simple">
									<Thead backgroundColor="#f5f6fa">
										<Tr>
											<Th>Prénom Nom</Th>
											<Th>Role</Th>
											<Th>Job</Th>
											<Th>Heures/semaines</Th>
											<Th>Equipe(s)</Th>
											<Th>Ajouter le</Th>
											<Th>Modifier le</Th>
											<Th>Actions</Th>
										</Tr>
									</Thead>
									<Tbody>
										<Tr>
											<Td>John Doe</Td>
											<Td>Viewer</Td>
											<Td>Vendeur</Td>
											<Td>35h</Td>
											<Td>
												<Tag colorScheme="yellow">Flins</Tag>
											</Td>
											<Td>02/05/2023</Td>
											<Td>04/05/2023</Td>
											<Td>
												<ButtonGroup>
													<Button aria-label="Editer ce collaborateur">
														<MdEditDocument size={'1.5em'} />
													</Button>
													<Button aria-label="Effacer ce collaborateur">
														<MdDeleteForever size={'1.5em'} />
													</Button>
													<Button aria-label="Télécharger ce collaborateur">
														<MdOutlineFileDownload size={'1.5em'} />
													</Button>
												</ButtonGroup>
											</Td>
										</Tr>
									</Tbody>
								</Table>
							</TableContainer>
						</CardBody>
						<CardFooter>Pagination...</CardFooter>
					</Card>
				</Box>
			</Box>
			<Drawer
				size="lg"
				isOpen={isOpen}
				placement="right"
				onClose={handleCloseDrawer}
				finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>
						<Heading size="lg">{formChildrens[formName].title}</Heading>
					</DrawerHeader>
					<DrawerBody>{formChildrens[formName].component}</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {
			title: 'Collaborateurs',
			currentPage: 'teammates',
			breadcrumbs: [
				{ title: 'Accueil', current: false },
				{ title: 'Collaborateurs', href: '', current: true }
			]
		}
	};
}
