import React from 'react';
import Head from 'next/head';

import {
	Heading,
	Flex,
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
	Icon,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Input,
	useDisclosure,
	HStack,
	Spacer
} from '@chakra-ui/react';
import {
	MdCalendarMonth,
	MdDeleteForever,
	MdEditDocument,
	MdOutlineAdd,
	MdOutlineFileDownload,
	MdEditCalendar,
	MdGroups,
	MdAddCircleOutline
} from 'react-icons/md';
import TeammatesForm from '@/components/forms/teammatesForm';
import TeamForm from '@/components/forms/teamForm';

type FormName = 'none' | 'team' | 'teammate';

export default function Teammates() {
	const [formName, setFormName] = React.useState<FormName>('none');
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
		team: { title: 'Créer une équipe', component: <TeamForm /> },
		teammate: { title: 'Créer une collaboratrice', component: <TeammatesForm /> },
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
							<Divider orientation="vertical" h="40px" ml={4} mr={4} />
							<HStack>
								<Text>filtre(s)</Text>
							</HStack>
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
