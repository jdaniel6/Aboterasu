"use client";

import Link from "next/link";
import { useState } from "react";

export default function TermsOfService() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <Link href="/" style={{ display: 'block', marginBottom: '20px' }}>
                <img
                    src="/aboterasu.png"
                    alt="Aboterasu Home"
                    style={{
                        width: '100px',
                        height: 'auto',
                        maxWidth: '100%',
                        borderRadius: '50%',
                        border: '2px solid white',
                        transition: 'transform 0.3s',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                        objectFit: 'cover',
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </Link>
            <h1>Terms of Service for Aboterasu (Aboterasu#7281)</h1>
            <h2>Effective Date: 13th March, 2025</h2>
            <p>Welcome to Aboterasu (the &quot;Bot&quot;). By using the Bot, you agree to comply with and be bound by the following Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Bot.</p>
            <ol style={{ listStyleType: 'upper-roman' }}>
                <li><b>Acceptance of Terms</b></li>
                <p>By accessing or using the Bot, you confirm that you have read, understood, and agree to be bound by these Terms. If you are using the Bot on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.</p>
                <li><b>Description of the Bot</b></li>
                <p>Aboterasu is a Discord bot that provides functionalities to enhance the experience of the game SMITE2, with games, news, and various other information and related activities. The Bot is provided "as is" and may be updated or modified at any time without prior notice.</p>
                <li><b>User Responsibilities</b></li>
                <p>You must be at least 13 years old to use the Bot. If you are under 13, you may not use the Bot.</p>
                <p>You are responsible for all activities that occur under your Discord account.</p>
                <p>You agree not to use the Bot for any illegal or unauthorized purpose.</p>
                <p>You must not interfere with or disrupt the Bot or servers or services connected to the Bot.</p>
                <li><b>User Content</b></li>
                <p>You are solely responsible for any content you submit or share while using the Bot.</p>
                <p>By using the Bot, you grant Aboterasu a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display your content for the purpose of providing the Bot's services.</p>
                <li><b>Privacy Policy</b></li>
                <p>Your privacy is important to us. Please review our <Link href="/privacy-policy" style={{ color: "blueviolet" }}>Privacy Policy</Link> to understand how we collect, use, and protect your information.</p>
                <li><b>Termination</b></li>
                <p>We reserve the right to suspend or terminate your access to the Bot at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or the Bot.</p>
                <li><b>Disclaimer of Warranties</b></li>
                <p>The Bot is provided on an "as is" and "as available" basis. Aboterasu makes no representations or warranties of any kind, express or implied, regarding the operation of the Bot or the information, content, materials, or products included.</p>
                <li><b>Limitation of Liability</b></li>
                <p>To the fullest extent permitted by law, Aboterasu shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the Bot.</p>
                <li><b>Changes to Terms</b></li>
                <p>We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page. You are advised to review these Terms periodically for any changes.</p>
                <li><b>Contact Information</b></li>
                <p>If you have any questions about these Terms, please contact us.</p>
                <p>Aboterasu's <Link href="https://discord.gg/6FpzxyWAU8" style={{ color: "blueviolet" }}>Discord Support Server</Link></p>
                <p>thekayaya on Discord</p>
            </ol>
        </div>
    );
}