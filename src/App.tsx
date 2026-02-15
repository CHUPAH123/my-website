import './App.css'
import './Background.css'
import { useState } from "react";
import { useFadeInOnScroll } from "./fade";

interface SpeechBubbleProps {
  text: string;
  direction?: "left" | "right";

}

export function SpeechBubble({ text, direction = "left" }: SpeechBubbleProps) {
  return (
    <div className={`speech-bubble ${direction}`}>
      {text}
    </div>
  );
}


function FadeSection({ children }: { children: React.ReactNode }) {
  const [ref, visible] = useFadeInOnScroll();

  return (
    <div
      ref={ref}
      className={`fade-in ${visible ? "show" : ""}`}
    >
      {children}
    </div>
  );
}

//MAYBE ADD READ INDICATOR
//Yearly goals maybe add this
//Moving background maybe

function getPage() {
  const [page, setPage] = useState("home");
  const [night, changeTime] = useState(false);
  switch (page) {
    case "home":
      return <div>
        <div className='page'>
          <div className={night ? 'front_nav dark' : 'front_nav bright'}>
            <FadeSection>
              <div className='nav_element'>
                <h1> Chup</h1>
              </div>
              <div className='nav_element searchbar'>
                <img className='searchbar_icon' src='search.svg'></img>
              </div>
              <a onClick={() => setPage("portfolio")}>
                <div className='nav_element link'>
                  <img src='portfolio.jpg' className='nav_avatar'></img>
                  <h2 className='nav_name'> Project Portfolio </h2>
                  <div className='nav_description'>Recently, I started experimenting... · 2w</div>
                </div>
              </a>

              <a onClick={() => setPage("about")}>
                <div className='nav_element link'>

                  <img src='aboutme.png' className='nav_avatar'></img>
                  <h2 className='nav_name two'> About Me </h2>
                  <div className='nav_description two'>omg that looks like a... · 2h</div>

                </div>
              </a>

              <a onClick={() => setPage("random")}>
                <div className='nav_element link'>
                  <img src='random.png' className='nav_avatar'></img>
                  <h2 className='nav_name three'> Random Photos </h2>
                  <div className='nav_description three'>1 file · 2m</div>
                </div>
              </a>
            </FadeSection>
          </div>

          <div className='main'>
            
              <div className={ night? 'welcome dark' : 'welcome bright'}>Welcome to my website</div>
              <div className='icon_holder'>
              <img src='discord.svg' className='icon' onClick={() => window.location.href = "https://discord.com/users/646617969736024081"}></img>
              <img src='instagram.svg' className='icon' onClick={() => window.location.href = "https://www.instagram.com/flthanwen/"}></img>
              <img src='github.svg' className='icon' onClick={() => window.location.href = "https://github.com/CHUPAH123"}></img>
              </div>
            
          </div>
        </div>
        <div className='sun_pos'>
        <button className={night ? 'sun moon' : 'sun'} onClick={() => { changeTime(!night) }}></button>
        </div>
        <div className={night ? `sky background` : 'sky s_f background'}>
          <img src='sunset.png' alt='background image of a sunset'></img>
        </div>
        <div className={night ? `night n_f background night_building` : `night background night_building`}>
          <img src='background2.png' alt='background image of a night setting'></img>
        </div>


      </div>
    case "portfolio":
      return <div>
        <div className='page'>

          <div className={night ? 'front_nav dark' : 'front_nav bright'}>
            <FadeSection>
              <div className='nav_element'>
                <h1> Chup</h1>
              </div>
              <div className='nav_element searchbar'>
                <img className='searchbar_icon' src='search.svg'></img>
              </div>
              <a onClick={() => setPage("portfolio")}>
                <div className='nav_element link selected'>
                  <img src='portfolio.jpg' className='nav_avatar'></img>
                  <h2 className='nav_name'> Project Portfolio </h2>
                  <div className='nav_description'>Recently, I started experimenting... · 2w</div>
                </div>
              </a>

              <a onClick={() => setPage("about")}>
                <div className='nav_element link'>

                  <img src='aboutme.png' className='nav_avatar'></img>
                  <h2 className='nav_name two'> About Me </h2>
                  <div className='nav_description two'>omg that looks like a... · 2h</div>

                </div>
              </a>
              <a onClick={() => setPage("random")}>
                <div className='nav_element link'>
                  <img src='random.png' className='nav_avatar'></img>
                  <h2 className='nav_name three'> Random Photos </h2>
                  <div className='nav_description three'>1 file · 2m</div>
                </div>
              </a>
            </FadeSection>
          </div>
          <div className='main'>
            <div className='gap'></div>
            <div className={night ? 'convo_header dark' : 'convo_header bright'}>
              <img className='avatar' src='portfolio.jpg'></img>
              <div className='icons'>
                <img className='header_icon' src='phone.svg' onClick={() => window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}></img>
                <img className='header_icon two' src='info.svg' onClick={() => window.location.href = "https://www.youtube.com/watch?v=OxstMK_Gkzw"}></img>
                <button className={night ? 'sun moon' : 'sun'} onClick={() => { changeTime(!night) }}></button>
              </div>
              <div className='avatar_name'>Portfolio</div>
              <div className='avatar_active'>1 active now</div>
            </div>
            <p>30/1/2025</p>
            <div className='project'>

              <div className='project_item left'>
                <FadeSection>
                  <SpeechBubble text="It all started with freecodecamp, where I learnt most of the basics for HTML and CSS" direction="left" />
                </FadeSection>
              </div>

              <div className='project_item'></div>

              <div className='project_item'>
                <FadeSection>
                  <div className='image-bubble left'>
                    <img className="images" src="freecodecamp.png" alt="freecodecamp" />
                  </div>
                </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'></div>
              <div className='project_item right'>
                <FadeSection>
                  <SpeechBubble text="We all gotta start somewhere 😤" direction="right" />
                </FadeSection>
              </div>

              <div className='project_item'></div>
              <div className='project_item right'>
                <FadeSection>
                  <SpeechBubble text="What did you do after that?" direction="right" />
                  <div className='delivered'>Delivered</div>
                </FadeSection>
              </div>
            </div>

            <p>15/03/2025</p>
            <div className='project'>
              <div className='project_item left'>
                <FadeSection>
                  <SpeechBubble text="I then joined the IT portfolio for RAMSOC, where I contributed towards several large projects." direction="left" />
                </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'>
                <FadeSection>
                  <div className='image-bubble left'>

                    <div className='container'>
                      <div className='slider-wrapper'>
                        <div className='slider'>
                          <img className="images" id='ramsoc' src="ramsoc_it.jpg" alt="ramsoc_it"></img>
                          <img className="images" id='ramsoc1' src="pickabots.jpg" alt="pickabots1" />
                          <img className="images" id='ramsoc3' src="sumobots.png" alt="pickabots3" />
                          <div className='slider-nav'>
                            <a href='#ramsoc'></a>
                            <a href='#ramsoc1'></a>
                            <a href='#ramsoc3'></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item left'>
                <FadeSection>
                  <SpeechBubble text="My favourite project was building the pickabots site from scratch, which was a platform that allowed you to 💗gamble💗 and 🤩bet🤩 with online currency on the competing robots. I mainly worked on the backend components for this project so I learned a lot about api routes and project infrastructure. I also learned how to develop and design frontend components using figma." direction="left" />
                </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'></div>
              <div className='project_item right'>
                <FadeSection>
                  <SpeechBubble text="That sounds so fun 🤤, what else did you do?" direction="right" />
                </FadeSection>
              </div>
            </div>

            <p>20/04/2025</p>
            <div className='project'>
              <div className='project_item left'>
                <FadeSection>
                  <SpeechBubble text="Yeah I also worked on creating a sanitising robot for the RAMSOC buildathon event and ended up winning the aesthetic prize 😆" direction="left" />
                </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'>
                <FadeSection>
                  <div className='image-bubble left'>
                    <img className="images" src="glowy.jpg" alt="glowy"></img>
                  </div>
                </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item left'>
                <FadeSection>
                  <SpeechBubble text="I learned a lot about arduino basics from this project, which helps especially because I am a Comp Sci / Engineering student." direction="left" />
                </FadeSection>
              </div>
              <div className='project_item'></div>
            </div>
            <p>15/12/2025</p>
            <div className='project'>
              <div className='project_item'></div>
              <div className='project_item right'>
                <FadeSection>
                  <SpeechBubble text="What are you currently working on now?" direction="right" />
                  <div className='delivered'>Delivered</div>
                </FadeSection>
              </div>

              <div className='project_item left'>
                <FadeSection>
                  <SpeechBubble text="Recently, I started experimenting on AI structures, following tutorials to create my own AI models. I then replicated modern models like Densenet121 using pytorch and trained it to distinguish between malignant and benign melanomas. From this, I am trying to create a detection device using arduino components and a hosted live server." direction="left" />
                </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'>
                <FadeSection>
                  <div className='image-bubble left'>
                    <img className="images" src="ai_components.png" alt="components for ai project"></img>
                  </div>
                </FadeSection>
              </div>
              <div className='project_item'></div>

            </div>
          </div>
        </div>

        <div className={night ? `sky background` : 'sky s_f background'}>
          <img src='sunset.png' alt='background image of a sunset'></img>
        </div>
        <div className={night ? `night n_f background night_building` : `night background night_building`}>
          <img src='background2.png' alt='background image of a night setting'></img>
        </div>
      </div>;
    case "about":
      return <div>
        <div className='page'>
          <div className={night ? 'front_nav dark' : 'front_nav bright'}>
            <FadeSection>
              <div className='nav_element'>
                <h1> Chup</h1>
              </div>
              <div className='nav_element searchbar'>
                <img className='searchbar_icon' src='search.svg'></img>
              </div>
              <a onClick={() => setPage("portfolio")}>
                <div className='nav_element link'>
                  <img src='portfolio.jpg' className='nav_avatar'></img>
                  <h2 className='nav_name'> Project Portfolio </h2>
                  <div className='nav_description'>Recently, I started experimenting... · 2w</div>
                </div>
              </a>

              <a onClick={() => setPage("about")}>
                <div className='nav_element link selected'>

                  <img src='aboutme.png' className='nav_avatar'></img>
                  <h2 className='nav_name two'> About Me </h2>
                  <div className='nav_description two'>omg that looks like a... · 2h</div>

                </div>
              </a>
              <a onClick={() => setPage("random")}>
                <div className='nav_element link'>
                  <img src='random.png' className='nav_avatar'></img>
                  <h2 className='nav_name three'> Random Photos </h2>
                  <div className='nav_description three'>1 file · 2m</div>
                </div>
              </a>
            </FadeSection>
          </div>
          <div className='main'>
            <div className='gap'></div>
            <div className={night ? 'convo_header dark' : 'convo_header bright'}>
              <img className='avatar' src='aboutme.png'></img>
              <div className='icons'>
                <img className='header_icon' src='phone.svg' onClick={() => window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}></img>
                <img className='header_icon two' src='info.svg' onClick={() => window.location.href = "https://www.youtube.com/watch?v=OxstMK_Gkzw"}></img>
                <button className={night ? 'sun moon' : 'sun'} onClick={() => { changeTime(!night) }}></button>
              </div>
              <div className='avatar_name'>About me</div>
              <div className='avatar_active'>1 active now</div>
            </div>
            <p>Today at 12:05pm</p>
            <div className='project'>
              <div className='project_item'></div>
              <div className='project_item right'>
                <FadeSection>
                  <SpeechBubble text="Sooo is chup really your real name  ?? 🤨" direction="right" />
                </FadeSection>
              </div>


              <div className='project_item left'>
                <FadeSection>
                  <SpeechBubble text="Chup is my online alias 😆 My real name is Hanwen and this is me and my dog Snowy" direction="left" />
                </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'>
                <FadeSection>
                  <div className='image-bubble left'>
                    <img className="images" src="me.jpg" alt="image of chup" />
                  </div>
                </FadeSection>
              </div>
              <div className='project_item'></div>


              <div className='project_item'></div>
              <div className='project_item right'>
                <FadeSection>
                  <SpeechBubble text="Drop the lore behind the name 🙏" direction="right"/>
                </FadeSection>
              </div>

              
              <div className='project_item left'>
                <FadeSection>
                  <SpeechBubble text="It all started in year 8 when I unfortunately had too much time on my hands and accidentally watched about 900 episodes of one piece 😅. Chopper was one of my favourite characters from that show so my nickname took inspiration from his name " direction="left" />
                </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'>
                <FadeSection>
                  <div className='image-bubble left'>
                    <img className="images" src="chopper.jpg" alt="image of chopper" />
                  </div>
                </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item left'>
                <FadeSection>
                  <SpeechBubble text="You can probably already tell I watch a lot of anime so heres my top 3 shows : Frieren, JJK and Vinland Saga " direction="left" />
                </FadeSection>
              </div>
              <div className='project_item'></div>
              
              <div className='project_item'></div>
              <div className='project_item right'>
                <FadeSection>
                  <SpeechBubble text="Wow I love those shows too, anything else you like?" direction="right" />
                </FadeSection>
              </div>
              
              <div className='project_item left'>
                <FadeSection>
                  <SpeechBubble text="Sooo after watching Haikyuu it kind of got me into volleyball so i've been really into it for about 6 months now" direction="left" />
                </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'>
                <FadeSection>
                  <div className='image-bubble left'>
                    <img className="images" src="vball.jpg" alt="image of my vball team" />
                  </div>
                </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item left'>
                <FadeSection>
                  <SpeechBubble text="I also enjoy going to the gym in the middle of the night 😭" direction="left" />
                </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'>
                <FadeSection>
                  <div className='image-bubble left'>
                    <img className="images" src="gym.jpg" alt="image of a gym" />
                  </div>
                </FadeSection>
              </div>
              <div className='project_item'></div>
            </div>
            <p>Today at 7:05pm</p>
            <div className='project'>
              <div className='project_item'></div>
              <div className='project_item right'>
                <FadeSection>
                  <SpeechBubble text="Those are some really healthy hobbies😆" direction="right" />
                </FadeSection>
              </div>

              <div className='project_item left'>
                <FadeSection>
                  <SpeechBubble text="Here is a not so healthy hobby😈" direction="left" />
                </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'>
                <FadeSection>
                  <div className='image-bubble left'>
                    <img className="images" src="tiramisu.jpg" alt="image of a tiramisu"/>
                  </div>
                </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'></div>
              <div className='project_item right'>
                <FadeSection>
                  <SpeechBubble text="i love cheeky 2am dessert seshes too😋" direction="right" />
                  <div className='delivered'>Delivered</div>
                </FadeSection>
              </div>

            </div>
          </div>
        </div>

        <div className={night ? `sky background` : 'sky s_f background'}>
          <img src='sunset.png' alt='background image of a weather vane'></img>
        </div>
        <div className={night ? `night n_f background night_building` : `night background night_building`}>
          <img src='background2.png' alt='background image of a night setting'></img>
        </div>
      </div>
    case "random":
      return <div>
        <div className='page'>
          <div className={night ? 'front_nav dark' : 'front_nav bright'}>
            <FadeSection>
              <div className='nav_element'>
                <h1> Chup</h1>
              </div>
              <div className='nav_element searchbar'>
                <img className='searchbar_icon' src='search.svg'></img>
              </div>
              <a onClick={() => setPage("portfolio")}>
                <div className='nav_element link'>
                  <img src='portfolio.jpg' className='nav_avatar'></img>
                  <h2 className='nav_name'> Project Portfolio </h2>
                  <div className='nav_description'>Recently, I started experimenting... · 2w</div>
                </div>
              </a>

              <a onClick={() => setPage("about")}>
                <div className='nav_element link'>

                  <img src='aboutme.png' className='nav_avatar'></img>
                  <h2 className='nav_name two'> About Me </h2>
                  <div className='nav_description two'>omg that looks like a... · 2h</div>

                </div>
              </a>
              <a onClick={() => setPage("random")}>
                <div className='nav_element link selected'>
                  <img src='random.png' className='nav_avatar'></img>
                  <h2 className='nav_name three'> Random Photos </h2>
                  <div className='nav_description three'>1 file · 2m</div>
                </div>
              </a>
            </FadeSection>
          </div>

          <div className='main'>
            <div className='gap'></div>
            <div className={night ? 'convo_header dark' : 'convo_header bright'}>
              <img className='avatar' src='random.png'></img>
              <div className='icons'>
                <img className='header_icon' src='phone.svg' onClick={() => window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}></img>
                <img className='header_icon two' src='info.svg' onClick={() => window.location.href = "https://www.youtube.com/watch?v=OxstMK_Gkzw"}></img>
                <button className={night ? 'sun moon' : 'sun'} onClick={() => { changeTime(!night) }}></button>
              </div>
              
              <div className='avatar_name'>Random Photos</div>
              <div className='avatar_active'>1 active now</div>
            </div>
            <p>15/12/2024</p>
            <div className='project' id='dog'>

              <div className='project_item left'>
                <FadeSection>
                  <div className='image-bubble left'>
                    <div className='container'>
                      <div className='slider-wrapper'>
                        <div className='slider'>
                          <img className="images" id='dog1' src="dog.png" alt="Image of Snowy" />
                          <img className="images" id='dog2' src="dog2.jpg" alt="Image of Snowy2" />
                          <img className="images" id='dog3' src="dog3.jpg" alt="Image of Snowy3" />
                          <div className='slider-nav'>
                            <a href='#dog1'></a>
                            <a href='#dog2'></a>
                            <a href='#dog3'></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeSection>
              </div>
              <div className='project_item'></div>
              <div className='project_item'></div>

              <div className='project_item right'>
                <FadeSection>
                  <SpeechBubble text="woahh what a cute dog 😆" direction="right" />
                </FadeSection>
              </div>
            </div>
            <p>6/7/2025</p>
            <div className='project'>

              <div className='project_item'></div>
              <div className='project_item right'>
                <FadeSection>
                  <SpeechBubble text="Do you enjoy talking to yourself?" direction="right" />
                </FadeSection>
              </div>

              <div className='project_item left'>
                <FadeSection>
                  <SpeechBubble text="No i am getting a headache so im just gonna spam images here😂" direction="left" />
                </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'>
                  <FadeSection>
                    <div className='image-bubble left'>
                      <img className="images" src="random1.jpg"/>
                    </div>
                  </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'>
                  <FadeSection>
                    <div className='image-bubble left'>
                      <img className="images" src="random2.jpg"/>
                    </div>
                  </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'>
                  <FadeSection>
                    <div className='image-bubble left'>
                      <img className="images" src="random3.jpg"/>
                    </div>
                  </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'>
                  <FadeSection>
                    <div className='image-bubble left'>
                      <img className="images" src="random4.jpg"/>
                    </div>
                  </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'>
                  <FadeSection>
                    <div className='image-bubble left'>
                      <img className="images" src="random5.jpg"/>
                    </div>
                  </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'>
                  <FadeSection>
                    <div className='image-bubble left'>
                      <img className="images" src="random6.jpg"/>
                    </div>
                  </FadeSection>
              </div>
              <div className='project_item'></div>

              <div className='project_item'>
                  <FadeSection>
                    <div className='image-bubble left'>
                      <img className="images" src="shurkou.jpg"/>
                    </div>
                  </FadeSection>
              </div>
              <div className='project_item'></div>

            </div>
          
            <div className={night ? `sky background` : 'sky s_f background'}>
              <img src='sunset.png' alt='background image of a weather vane'></img>
            </div>
            <div className={night ? `night n_f background night_building` : `night background night_building`}>
              <img src='background2.png' alt='background image of a night setting'></img>
            </div>
          </div>
        </div>
      </div>
  }
}

function App() {


  return (
    getPage()
  )
}

export default App
