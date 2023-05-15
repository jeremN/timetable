import Head from 'next/head';
import NextLink from 'next/link';
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
	Icon
} from '@chakra-ui/react';
import {
	MdCalendarMonth,
	MdDeleteForever,
	MdEditDocument,
	MdOutlineAdd,
	MdOutlineFileDownload,
	MdEditCalendar,
	MdGroups
} from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';

export default function Home() {
	return (
		<>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Homepage" />
			</Head>
			<Box pt={3} w={'100%'} h={'100%'}>
				<Card padding={4} backgroundColor={'#D6EAF7'}>
					<CardHeader p={0}>
						<Heading size="md">Bonjour Johanna !</Heading>
					</CardHeader>
					<CardBody pt={2} pl={0} pr={0} pb={0}>
						<Text w={'30%'}>
							Bienvenue sur votre dashboard. Ici vous pouvez accéder à vos derniers plannings et
							gérer vos collaborateurs.
						</Text>
					</CardBody>
				</Card>
				<Box pt={14}>
					<Flex gap={4}>
						<Box flex={1}>
							<Heading
								size="md"
								color={'#292448'}
								marginBottom={4}
								minH={'40px'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'space-between'}>
								Plannings{' '}
								<Button
									background="none"
									color="#292448"
									border="2px solid #292448"
									borderRadius="md"
									size="md"
									fontSize={'1rem'}
									className="justify-self-end">
									Gérer
								</Button>
							</Heading>
							<Card p={4} borderRadius={'8px'}>
								<CardBody gap={2} flex={1}>
									<Flex justifyContent={'space-between'} alignItems={'center'}>
										<Flex alignItems={'center'}>
											<Box
												display="flex"
												alignItems="center"
												justifyContent="center"
												w="12"
												h="12"
												backgroundColor="#292448"
												borderRadius="50%"
												mr={4}>
												<Icon as={MdEditCalendar} color={'white'} fontSize="1.5em" />
											</Box>
											<Text fontSize="2xl" as="b" pr={2}>
												0
											</Text>
											<Text fontSize="sm">Brouillon(s)</Text>
										</Flex>
										<Divider orientation="vertical" h={'50px'} />
										<Flex alignItems={'center'}>
											<Box
												display="flex"
												alignItems="center"
												justifyContent="center"
												w="12"
												h="12"
												backgroundColor="#292448"
												borderRadius="50%"
												mr={4}>
												<Icon as={MdCalendarMonth} color={'white'} fontSize="1.5em" />
											</Box>
											<Text fontSize="2xl" as="b" pr={2}>
												0
											</Text>
											<Text fontSize="sm">Publier</Text>
										</Flex>
									</Flex>
								</CardBody>
							</Card>
						</Box>
						<Box flex={1}>
							<Heading
								size="md"
								color={'#292448'}
								marginBottom={4}
								minH={'40px'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'space-between'}>
								Collaborateurs{' '}
								<Button
									background="none"
									color="#292448"
									border="2px solid #292448"
									borderRadius="md"
									size="md"
									fontSize={'1rem'}
									className="justify-self-end">
									Gérer
								</Button>
							</Heading>
							<Card p={4} borderRadius={'8px'}>
								<CardBody>
									<Flex justifyContent={'space-between'} alignItems={'center'}>
										<Flex alignItems={'center'}>
											<Box
												display="flex"
												alignItems="center"
												justifyContent="center"
												w="12"
												h="12"
												backgroundColor="#292448"
												borderRadius="50%"
												mr={4}>
												<Icon as={FiUsers} color={'white'} fontSize="1.5em" />
											</Box>
											<Text fontSize="2xl" as="b" pr={2}>
												0
											</Text>
											<Text fontSize="sm">Collaborateur(s)</Text>
										</Flex>
										<Divider orientation="vertical" h={'50px'} />
										<Flex alignItems={'center'}>
											<Box
												display="flex"
												alignItems="center"
												justifyContent="center"
												w="12"
												h="12"
												backgroundColor="#292448"
												borderRadius="50%"
												mr={4}>
												<Icon as={MdGroups} color={'white'} fontSize="1.5em" />
											</Box>
											<Text fontSize="2xl" as="b" pr={2}>
												0
											</Text>
											<Text fontSize="sm">Equipes</Text>
										</Flex>
									</Flex>
								</CardBody>
							</Card>
						</Box>
						<Box flex={1}>
							<Heading
								size="md"
								color={'#292448'}
								marginBottom={4}
								display={'flex'}
								minH={'40px'}
								alignItems={'center'}
								justifyContent={'space-between'}>
								Planning du jour
							</Heading>
							<Card p={4} borderRadius={'8px'}>
								<CardBody></CardBody>
							</Card>
						</Box>
					</Flex>
				</Box>
				<Box h={'100%'} pt={14} className="w-full">
					<Heading size="md" color={'#292448'} marginBottom={4}>
						Vos derniers plannings
					</Heading>
					<Card>
						<CardBody>
							<TableContainer>
								<Table variant="simple">
									<Thead backgroundColor="#f5f6fa">
										<Tr>
											<Th>Nom</Th>
											<Th>Période</Th>
											<Th>Equipe</Th>
											<Th>Status</Th>
											<Th>Créer le</Th>
											<Th>Modifier le</Th>
											<Th>Actions</Th>
										</Tr>
									</Thead>
									<Tbody>
										<Tr>
											<Td>S1</Td>
											<Td>01/05/2023 - 07/05/2023</Td>
											<Td>Flins</Td>
											<Td>
												<Tag colorScheme="yellow">Brouillon</Tag>
											</Td>
											<Td>02/05/2023</Td>
											<Td>04/05/2023</Td>
											<Td>
												<ButtonGroup>
													<Button aria-label="Editer ce planning">
														<MdEditDocument size={'1.5em'} />
													</Button>
													<Button aria-label="Effacer ce planning">
														<MdDeleteForever size={'1.5em'} />
													</Button>
													<Button aria-label="Télécharger ce planning">
														<MdOutlineFileDownload size={'1.5em'} />
													</Button>
												</ButtonGroup>
											</Td>
										</Tr>
										<Tr>
											<Td>S2</Td>
											<Td>01/05/2023 - 07/05/2023</Td>
											<Td>Flins</Td>
											<Td>
												<Tag colorScheme="green">Publier</Tag>
											</Td>
											<Td>02/05/2023</Td>
											<Td>04/05/2023</Td>
											<Td>
												<ButtonGroup>
													<Button aria-label="Editer ce planning">
														<MdEditDocument size={'1.5em'} />
													</Button>
													<Button aria-label="Effacer ce planning">
														<MdDeleteForever size={'1.5em'} />
													</Button>
													<Button aria-label="Télécharger ce planning">
														<MdOutlineFileDownload size={'1.5em'} />
													</Button>
												</ButtonGroup>
											</Td>
										</Tr>
										<Tr>
											<Td>S3</Td>
											<Td>01/05/2023 - 07/05/2023</Td>
											<Td>Flins</Td>
											<Td>
												<Tag colorScheme="green">Publier</Tag>
											</Td>
											<Td>02/05/2023</Td>
											<Td>04/05/2023</Td>
											<Td>
												<ButtonGroup>
													<Button aria-label="Editer ce planning">
														<MdEditDocument size={'1.5em'} />
													</Button>
													<Button aria-label="Effacer ce planning">
														<MdDeleteForever size={'1.5em'} />
													</Button>
													<Button aria-label="Télécharger ce planning">
														<MdOutlineFileDownload size={'1.5em'} />
													</Button>
												</ButtonGroup>
											</Td>
										</Tr>
										<Tr>
											<Td>S4</Td>
											<Td>01/05/2023 - 07/05/2023</Td>
											<Td>Flins</Td>
											<Td>
												<Tag colorScheme="yellow">Brouillon</Tag>
											</Td>
											<Td>02/05/2023</Td>
											<Td>04/05/2023</Td>
											<Td>
												<ButtonGroup>
													<Button aria-label="Editer ce planning">
														<MdEditDocument size={'1.5em'} />
													</Button>
													<Button aria-label="Effacer ce planning">
														<MdDeleteForever size={'1.5em'} />
													</Button>
													<Button aria-label="Télécharger ce planning">
														<MdOutlineFileDownload size={'1.5em'} />
													</Button>
												</ButtonGroup>
											</Td>
										</Tr>
										<Tr>
											<Td>S5</Td>
											<Td>01/05/2023 - 07/05/2023</Td>
											<Td>Flins</Td>
											<Td>
												<Tag colorScheme="green">Publier</Tag>
											</Td>
											<Td>02/05/2023</Td>
											<Td>-</Td>
											<Td>
												<ButtonGroup>
													<Button aria-label="Editer ce planning">
														<MdEditDocument size={'1.5em'} />
													</Button>
													<Button aria-label="Effacer ce planning">
														<MdDeleteForever size={'1.5em'} />
													</Button>
													<Button aria-label="Télécharger ce planning">
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
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {
			title: 'Dashboard',
			currentPage: 'dashboard',
			breadcrumbs: [
				{ title: 'Accueil', current: false },
				{ title: 'Dashboard', href: '', current: true }
			]
		}
	};
}
