import Navbar from "../../components/navBar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuChevronsUpDown } from "react-icons/lu";

export default function WhitePaper() {
  return (
    <>
      <Navbar />
      <div className="bg-inherit pt-24">
        <div className="md:hidden fixed w-full bg-inherit z-1">
          <Collapsible>
            <CollapsibleTrigger className="w-full">
              <div className="px-6 py-3 flex justify-between items-baseline border-b hover:cursor-pointer">
                <div className="font-semibold">Menu</div>
                <div>
                  <LuChevronsUpDown />
                </div>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="px-6 py-2 mt-1 mb-10">
                <li>
                  <div className="px-3 py-2">
                    <a href="#introduction1">Lorem, ipsum.</a>
                  </div>
                </li>
                <li>
                  <div className="px-3 py-2">
                    <Collapsible>
                      <div className="flex justify-between items-baseline">
                        <div>
                          <a href="#this-is-a-test">This is a test</a>
                        </div>
                        <CollapsibleTrigger>
                          <div className="hover:cursor-pointer">
                            <LuChevronsUpDown />
                          </div>
                        </CollapsibleTrigger>
                      </div>
                      <CollapsibleContent>
                        <ul>
                          <li className="pl-5">
                            <Collapsible>
                              <div className="flex justify-between items-baseline">
                                <div>
                                  <div className="px-3 py-2">
                                    <a href="#Lorem-ipsum-dolor-sit-amet-consectetur_?">
                                      Lorem ipsum dolor sit amet consectetur?
                                    </a>
                                  </div>
                                </div>
                                <CollapsibleTrigger>
                                  <div className="hover:cursor-pointer">
                                    <LuChevronsUpDown />
                                  </div>
                                </CollapsibleTrigger>
                              </div>
                              <CollapsibleContent>
                                <ul className="pl-10">
                                  <li className="px-3 py-2">
                                    <a href="#test1">Test 1</a>
                                  </li>
                                  <li className="px-3 py-2">
                                    <a href="#test2">Test 2</a>
                                  </li>
                                  <li className="px-3 py-2">
                                    <a href="#test3">Test 3</a>
                                  </li>
                                </ul>
                              </CollapsibleContent>
                            </Collapsible>
                          </li>
                          <li className="pl-5">
                            <div className="px-3 py-2">Lorem, ipsum.</div>
                          </li>
                        </ul>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </li>
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="relative md:pt-23.5 pt-20">
          <div className="hidden md:block fixed left-0 top-50 bottom-100 overflow-y-scroll ml-8 md:w-94 lg:w-101.5">
            <ul className="px-6 py-2 mt-1 mb-10">
              <li>
                <div className="px-3 py-2">
                  <a href="#introduction1">Lorem, ipsum.</a>
                </div>
              </li>
              <li>
                <div className="px-3 py-2">
                  <Collapsible>
                    <div className="flex justify-between items-baseline">
                      <div>
                        <a href="#this-is-a-test">This is a test</a>
                      </div>
                      <CollapsibleTrigger>
                        <div className="hover:cursor-pointer">
                          <LuChevronsUpDown />
                        </div>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <ul>
                        <li className="pl-5">
                          <Collapsible>
                            <div className="flex justify-between items-baseline">
                              <div>
                                <div className="px-3 py-2">
                                  <a href="#Lorem-ipsum-dolor-sit-amet-consectetur_?">
                                    Lorem ipsum dolor sit amet consectetur?
                                  </a>
                                </div>
                              </div>
                              <CollapsibleTrigger>
                                <div className="hover:cursor-pointer">
                                  <LuChevronsUpDown />
                                </div>
                              </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent>
                              <ul className="pl-10">
                                <li className="px-3 py-2">
                                  <a href="#test1">Test 1</a>
                                </li>
                                <li className="px-3 py-2">
                                  <a href="#test2">Test 2</a>
                                </li>
                                <li className="px-3 py-2">
                                  <a href="#test3">Test 3</a>
                                </li>
                              </ul>
                            </CollapsibleContent>
                          </Collapsible>
                        </li>
                        <li className="pl-5">
                          <div className="px-3 py-2">
                            <a href="#lorem-ipsum">Lorem, ipsum.</a>
                          </div>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:ml-116 md:ml-95 max-w-300 px-8 top-48">
            <div className="max-w-220 ml-5">
              <div>
                <h1 className="text-3xl font-semibold mb-3 tracking-wider leading-11">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h1>
              </div>
              <div className="h-9 my-7 flex">
                <div className="flex">
                  <div className="mr-4 py-2 px-4.5 border-2 rounded-3xl flex items-center hover:cursor-pointer">
                    Download PDF
                  </div>
                  <div className="flex items-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <div className="py-[5px] px-4.5 border-2 rounded-3xl hover:cursor-pointer">
                          Language
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>English</DropdownMenuItem>
                        <DropdownMenuItem>English</DropdownMenuItem>
                        <DropdownMenuItem>English</DropdownMenuItem>
                        <DropdownMenuItem>English</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
              <div className="max-w-190">
                <h1
                  id="introduction1"
                  className="mb-4.5 text-2xl font-semibold"
                >
                  Introduction
                </h1>
                <p className="mb-7.5 text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                  cupiditate delectus magnam inventore incidunt odit asperiores
                  minima earum mollitia, praesentium, tempore sit fuga
                  temporibus totam. Voluptas nostrum iusto magnam pariatur
                  eligendi aut, eveniet quasi repudiandae nihil nobis maiores
                  deleniti, sed explicabo distinctio omnis minus cupiditate.
                </p>
                <p className="mb-7.5 text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                  cupiditate delectus magnam inventore incidunt odit asperiores
                  minima earum mollitia, praesentium, tempore sit fuga
                  temporibus totam. Voluptas nostrum iusto magnam pariatur
                  eligendi aut, eveniet quasi repudiandae nihil nobis maiores
                  deleniti, sed explicabo distinctio omnis minus cupiditate.
                </p>
                <p className="mb-7.5 text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                  cupiditate delectus magnam inventore incidunt odit asperiores
                  minima earum mollitia, praesentium, tempore sit fuga
                  temporibus totam. Voluptas nostrum iusto magnam pariatur
                  eligendi aut, eveniet quasi repudiandae nihil nobis maiores
                  deleniti, sed explicabo distinctio omnis minus cupiditate.
                </p>
                <h2
                  id="this-is-a-test"
                  className="mt-17.5 mb-4.5 text-xl font-semibold"
                >
                  This is a test.
                </h2>
                <p className="mb-7.5 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  atque repellat facere recusandae rerum maiores asperiores
                  error omnis. Eius eligendi omnis beatae explicabo quis minima
                  dolor nam, delectus alias iste.
                </p>
                <p className="mb-7.5 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  atque repellat facere recusandae rerum maiores asperiores
                  error omnis. Eius eligendi omnis beatae explicabo quis minima
                  dolor nam, delectus alias iste.
                </p>
                <p className="mb-7.5 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  atque repellat facere recusandae rerum maiores asperiores
                  error omnis. Eius eligendi omnis beatae explicabo quis minima
                  dolor nam, delectus alias iste.
                </p>
                <p className="mb-7.5 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  atque repellat facere recusandae rerum maiores asperiores
                  error omnis. Eius eligendi omnis beatae explicabo quis minima
                  dolor nam, delectus alias iste.
                </p>
                <h3
                  id="Lorem-ipsum-dolor-sit-amet-consectetur_?"
                  className="text-xl font-semibold mb-4"
                >
                  Lorem ipsum dolor sit amet consectetur?
                </h3>
                <p className="mb-7.5 text-lg">Lorem ipsum dolor sit amet:</p>
                <ol className="ml-4 mb-7.5">
                  <li className="mt-2.5 pl-2.5 text-lg">Lorem, ipsum.</li>
                  <li className="mt-2.5 pl-2.5 text-lg">Lorem, ipsum.</li>
                  <li className="mt-2.5 pl-2.5 text-lg">Lorem, ipsum.</li>
                  <li className="mt-2.5 pl-2.5 text-lg">Lorem, ipsum.</li>
                </ol>
                <p className="mb-7.5 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <h4 id="test1" className="mb-4 font-semibold text-lg">
                  Test 1
                </h4>
                <p className="mb-7.5 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  doloremque omnis nemo adipisci rem ducimus asperiores
                  voluptatum quae ullam! Commodi at molestias eaque rem ipsa?
                </p>
                <h4 id="test2" className="mb-4 font-semibold text-lg">
                  Test 2
                </h4>
                <p className="mb-7.5 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  doloremque omnis nemo adipisci rem ducimus asperiores
                  voluptatum quae ullam! Commodi at molestias eaque rem ipsa?
                </p>
                <h4 id="test3" className="mb-4 font-semibold text-lg">
                  Test 3
                </h4>
                <p className="mb-7.5 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  doloremque omnis nemo adipisci rem ducimus asperiores
                  voluptatum quae ullam! Commodi at molestias eaque rem ipsa?
                </p>
                <h3 id="lorem-ipsum" className="text-xl font-semibold mb-4">
                  Lorem, ipsum.
                </h3>
                <p className="mb-7.5 text-lg">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                  molestiae architecto dolore sunt soluta illum. Veniam fugit
                  iure tempora laborum debitis excepturi! Vero, architecto
                  voluptatibus?
                </p>
                <p className="mb-7.5 text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium quisquam nam hic nihil itaque accusamus vitae
                  alias, iusto possimus, iure inventore excepturi non facere
                  ipsam laudantium incidunt aliquam. Sequi beatae doloribus
                  inventore magni, in hic veritatis temporibus ipsum natus
                  velit.
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                aspernatur consequatur quos est id laboriosam expedita, fugiat
                repellat vel eius aperiam adipisci, et consectetur eveniet
                officiis eum odit vero explicabo nulla at! Necessitatibus
                quisquam odit ab quia error ex praesentium, modi animi autem?
                Odio repellat quos, quaerat aspernatur ipsam rerum hic dolores
                velit officiis quo! Id et praesentium modi! Quos aut rerum
                consectetur odio deserunt modi odit, corrupti quis, quisquam,
                magnam iusto inventore saepe vel ipsa. Aperiam velit atque sequi
                odit hic, quasi quae error natus architecto harum molestias
                dolorem nam ullam quidem assumenda sint. Ex eum ipsa dolore
                molestiae architecto est optio sed praesentium, quis explicabo
                quasi aperiam doloremque consectetur omnis soluta minima!
                Impedit saepe officia rerum voluptates nihil inventore numquam
                voluptas nesciunt ipsa eligendi distinctio vero tenetur, unde
                natus magnam incidunt aut? Porro, deleniti voluptas! Nostrum
                tenetur autem, cumque omnis porro deleniti quaerat ratione
                voluptas cum beatae amet quas assumenda earum alias quam
                corrupti quis eligendi soluta officiis odit sequi. Ad quasi
                blanditiis voluptates expedita debitis accusantium quibusdam
                adipisci soluta tenetur error? Nobis debitis earum possimus
                inventore vel nostrum cum, id nam recusandae eaque, vero aperiam
                quod! Perferendis facere quibusdam veniam saepe officia
                consectetur aut harum nobis in ratione, sint dolor excepturi
                rerum voluptas illum. Excepturi quos earum dolorem nemo vitae
                tenetur. Aut autem qui accusamus fugit doloremque error, porro
                consequatur neque provident non voluptas eius distinctio
                deleniti possimus dolore iure velit consectetur facilis adipisci
                quia nam tempore exercitationem optio aliquam? Dolores velit ut
                sequi iure? Ea, voluptatibus, velit, quaerat hic obcaecati porro
                quis rerum atque inventore ut eveniet laborum quasi? Nihil qui
                voluptate doloremque exercitationem earum esse tempore unde.
                Asperiores, assumenda! Error voluptate autem harum. Eos,
                similique quasi eum error ducimus tempore. Vitae possimus sequi
                saepe harum beatae quisquam quis dicta eligendi facere
                praesentium enim sint, assumenda repellat quod laboriosam qui
                iure excepturi sapiente vel vero magnam architecto nemo. Eaque
                delectus iusto quisquam unde at fugiat, quibusdam magnam earum
                assumenda, dignissimos fugit omnis sapiente, minus aliquid
                dolorum labore. Illum, commodi sunt. Accusantium expedita et
                quis doloremque laboriosam. Recusandae animi soluta quidem est
                id quae, enim odit doloribus fugit aperiam asperiores nulla in?
                Illum assumenda cupiditate eum? Reprehenderit ipsam id delectus
                porro numquam exercitationem laboriosam repellat enim labore
                commodi amet dolorem sint doloremque, qui assumenda cupiditate
                repudiandae libero! Dolorum itaque minus illo! Beatae dolorum
                ipsam adipisci, eius deleniti ratione obcaecati saepe
                praesentium itaque harum impedit dolores inventore blanditiis
                nihil recusandae repudiandae aspernatur voluptatibus fugiat ea.
                Eos repudiandae alias accusamus voluptas repellat laudantium
                veniam consectetur, odit, sed maiores reprehenderit ea autem
                praesentium ipsam aperiam nisi cum quod repellendus nostrum.
                Doloribus cum officiis, placeat saepe accusantium illum maxime
                iusto cupiditate eveniet velit, nesciunt assumenda reprehenderit
                qui impedit, porro laboriosam eligendi dolorum. Officia facere
                repellat, recusandae iste voluptatum nihil aperiam maiores
                repudiandae sunt rerum cupiditate consequuntur eius animi
                voluptate quasi est et quae minus illum praesentium corporis
                aliquam. Voluptas voluptate dolorem enim pariatur ipsam
                laudantium, ut explicabo cupiditate aliquid deleniti officia
                quidem architecto recusandae corrupti impedit quod adipisci sed
                veritatis dolor. Neque recusandae unde, magnam delectus
                voluptates repudiandae modi quo pariatur voluptatem quas eos
                aliquam odit quam. Dignissimos cumque quo officiis quae quas
                facere repudiandae natus nemo delectus expedita, beatae aliquid
                iusto adipisci eveniet recusandae a obcaecati, amet ullam
                necessitatibus suscipit dolore alias magni illo. Natus vitae
                amet consequuntur aliquam, asperiores iusto culpa numquam
                explicabo perspiciatis a! Natus alias dolores recusandae harum
                quidem nobis minus mollitia sequi quis? Itaque in, tenetur ut id
                expedita incidunt vitae cumque voluptate ipsam consequuntur
                neque eius accusantium voluptatem porro ad temporibus iure
                similique at aut, aspernatur laborum, repudiandae necessitatibus
                fuga qui? Possimus totam at quis molestiae, aperiam voluptas
                quaerat veniam iste natus inventore omnis nobis voluptates quas
                necessitatibus sit corrupti quae suscipit accusantium minima
                dignissimos ipsam reprehenderit. Architecto eligendi praesentium
                maxime totam voluptatem est voluptates saepe magnam officia non!
                Ullam, aperiam beatae qui dolor deserunt officia earum nobis
                rerum nostrum repellat unde eveniet facilis quasi quaerat amet?
                Minus quibusdam consectetur ullam totam incidunt, possimus
                accusamus natus harum? Et dolorum cupiditate quod fuga placeat?
                Fuga atque, labore veritatis facere consequuntur tempora officia
                eaque blanditiis ad iure quae, aperiam voluptatum ea, sequi
                optio laboriosam doloribus soluta unde corrupti maiores illo
                similique? Et, quis, atque facere doloribus iusto dolor alias
                repellendus magni aperiam hic aliquam, labore ea quam dolorem ad
                provident. Impedit, voluptate beatae. Cumque, error voluptatum?
                Aperiam sapiente, deserunt perspiciatis dolorum earum itaque,
                saepe magni tempore labore libero architecto non quod sunt
                possimus mollitia odio aut? Nam ea repellendus dolorem quia
                itaque excepturi, exercitationem sapiente adipisci! Sapiente
                quae dolorem rerum voluptates fuga sunt vero omnis possimus qui
                cumque voluptatem repellat illum atque accusantium, molestiae
                eveniet maiores debitis officiis esse voluptatum? Dolor
                temporibus modi amet mollitia nostrum aspernatur omnis fugiat
                adipisci eos! Expedita, vero sequi obcaecati harum aspernatur
                velit quam odio pariatur deserunt earum. Maxime, omnis nostrum.
                Unde.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="h-100">Footer</footer>
    </>
  );
}
