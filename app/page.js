"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null); // Reference to the scrolling div
  const items = [
    { src: '/god-details.png', title: 'God Details', description: 'Get details of abilities, aspects, lore - with even more detail than in-game!' },
    { src: '/builds.png', title: 'Builds', description: 'Need a build? Find some of the best, mathematically curated builds from the SMITE Discord Mentors - some of the top active players in SMITE2' },
    { src: '/tips.png', title: 'Tips', description: 'Sometimes there are secrets to playing a god well - they aren\'t secrets anymore' },
    { src: '/guides.png', title: 'Guides', description: 'View detailed analytics on how to play a god, their highs, lows, matchups, and much more!' },
    { src: '/items.png', title: 'Items', description: 'Get information about an item from SMITE2 - with even more detail than in-game!' },
    { src: '/custombuilds.png', title: 'Custom Builds', description: 'Want to show off a build? Want to check stats on a build? No more hunting for websites - get it right in your Discord server, with stats provided by https://smitecalculator.pro!' },
    { src: '/godabilitytrivia.png', title: 'God Ability Trivia', description: 'Test your knowledge of SMITE2 gods and their abilities! Climb to the top of the leaderboard!' },
    { src: '/resources.png', title: 'Resources', description: 'Get generic resources for SMITE2, as well as resources specific to each role and more!' },
  ];

  useEffect(() => {
    const scrollDiv = scrollRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollDiv) {
          // Check if scrolled to the end
          if (scrollDiv.scrollLeft + scrollDiv.clientWidth >= scrollDiv.scrollWidth) {
            scrollDiv.scrollLeft = 0; // Reset to the start
          } else {
            scrollDiv.scrollLeft += 2; // Adjust the scroll speed here
          }
        }
      }, 2); // Adjust the interval for speed
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    if (scrollDiv) {
      startScrolling();
      scrollDiv.addEventListener('mouseenter', stopScrolling);
      scrollDiv.addEventListener('mouseleave', startScrolling);
    }

    return () => {
      stopScrolling();
      if (scrollDiv) {
        scrollDiv.removeEventListener('mouseenter', stopScrolling);
        scrollDiv.removeEventListener('mouseleave', startScrolling);
      }
    };
  }, []);

  return (
    <div style={{ width: '100vw', flexDirection: 'column', paddingRight: '100px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', textAlign: 'center', width: '100%' }}>
        <Link href="/" style={{ display: 'block', marginRight: '20px' }}>
          <img
            src="/aboterasu.png"
            alt="Aboterasu Home"
            style={{
              width: '100px',
              height: 'auto',
              maxWidth: '100%',
              minWidth: '55px',
              borderRadius: '50%',
              border: '2px solid white',
              transition: 'transform 0.3s',
              transform: isHovered === 'aboterasu' ? 'scale(1.1)' : 'scale(1)',
              objectFit: 'cover',
            }}
            onMouseEnter={() => setIsHovered('aboterasu')}
            onMouseLeave={() => setIsHovered(false)}
          />
        </Link>
        <h1 style={{ margin: 0, fontSize: 'clamp(24px, 5vw, 40px)' }}>Aboterasu - a SMITE2 Discord Bot!</h1>
      </div>
      <div style={{ justifyContent: "center", textAlign: "center", paddingTop: "20px" }}>
        <p style={{ fontSize: 24 }}>Congratulations! You found one of the best SMITE2 bots out there!</p>
        <p style={{ fontSize: 20 }}>Aboterasu is a Discord bot focused on enhancing your SMITE2 experience, and is packed full of fun features!</p>
        <p style={{ fontSize: 32, paddingTop: '30px' }}>
          <Link href="https://discord.com/api/oauth2/authorize?client_id=906773394689761290&permissions=27362498964577&scope=bot" style={{ color: "#FA7500" }}>
            Invite Aboterasu to your Server!
          </Link>
        </p>
        <p style={{ fontSize: 20, paddingTop: '30px' }}>Some of Aboterasu's features:</p>
        <div ref={scrollRef} style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '50px 0' }}>
          {items.concat(items).map((item, index) => ( // Duplicate items for circular effect
            <div
              key={index}
              style={{ display: 'inline-flex', margin: '0 50px', overflow: 'auto', textAlign: 'center', position: 'relative', flexDirection: "column", alignItems: "center" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.overflow = 'visible';
                e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.overflow = 'auto';
                e.currentTarget.querySelector('img').style.transform = 'scale(1)';
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                style={{
                  width: '600px',
                  height: 'auto',
                  transition: 'transform 0.3s',
                  borderRadius: '10px'
                }}
              />
              <h3 style={{ margin: '5px 0', fontSize: '20px', paddingTop: '20px' }}><b>{item.title}</b></h3>
              <p style={{ fontSize: '18px' }}>{item.description}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 24, paddingTop: '30px' }}>and possibly the best feature of all:</p>
        <p style={{ fontSize: 24, paddingTop: '10px' }}>More features are being added regularly, in tune with what the community needs!</p>
        <p style={{ fontSize: 20, paddingTop: '10px' }}>Planned features include a tournament tracker, and once the HiRez SMITE2 API becomes publicly available: details of matches, players, and other statistics</p>
        <p style={{ fontSize: 32, paddingTop: '30px' }}>
          So what are you waiting for? <Link href="https://discord.com/api/oauth2/authorize?client_id=906773394689761290&permissions=27362498964577&scope=bot" >
            Invite Aboterasu to your server now!!
          </Link>
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <a href="https://discord.com/api/oauth2/authorize?client_id=906773394689761290&permissions=27362498964577&scope=bot" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px' }}>
            <img
              src="/add-bot.png"
              alt="Feedback"
              style={{
                width: '50px',
                height: '50px',
                transition: 'transform 0.3s',
                transform: isHovered === 'feedback' ? 'scale(1)' : 'scale(0.9)',
              }}
              onMouseEnter={() => setIsHovered('feedback')}
              onMouseLeave={() => setIsHovered(false)}
            />
          </a>
          <p>Add Aboterasu to your Server</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <a href="https://discord.gg/6FpzxyWAU8" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px' }}>
            <img
              src="/discord.png"
              alt="Discord"
              style={{
                width: '50px',
                height: '50px', borderRadius: '50%',
                transition: 'transform 0.3s',
                transform: isHovered === 'discord' ? 'scale(1.1)' : 'scale(1)',
              }}
              onMouseEnter={() => setIsHovered('discord')}
              onMouseLeave={() => setIsHovered(false)}
            />
          </a>
          <p>Support Server</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <a href="https://smitecalculator.pro" target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px' }}>
            <img
              src="/MACHA!.gif"
              alt="Myth's S2 Calculator"
              style={{
                width: '50px',
                height: '50px',
                transition: 'transform 0.3s',
                transform: isHovered === 'website' ? 'scale(1.2)' : 'scale(1.1)',
              }}
              onMouseEnter={() => setIsHovered('website')}
              onMouseLeave={() => setIsHovered(false)}
            />
          </a>
          <p>Mytharria's Calculator</p>
        </div>
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: '20px' }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Link href="/terms-of-service">Terms of Service</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li style={{ paddingTop: "30px" }}>
            Aboterasu is not endorsed by or affiliated with Hi-Rez Studios and does not reflect the views or opinions of Hi-Rez Studios or anyone officially involved in producing or managing SMITE.<br></br>
            SMITE and Hi-Rez Studios are trademarks or registered trademarks of Hi-Rez Studios, Inc.
            Most data provided by Hi-Rez. Some data, and all statistics, provided by Mytharria, owner of <Link href="https://smitecalculator.pro">Smite Calculator</Link>. © 2025 Hi-Rez Studios, Inc. All rights reserved.
          </li>
        </ul>
      </nav>
    </div >
  );
}