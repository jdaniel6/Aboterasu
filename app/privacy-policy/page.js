"use client";

import Link from "next/link";
import { useState } from "react";

export default function PrivacyPolicy() {
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
            <h1>Privacy Policy for Aboterasu (Aboterasu#7281)</h1>
            <h2>Effective Date: 13th March, 2025</h2>
            <p>This Privacy Policy describes how Aboterasu (\"we\", \"us\", or \"our\") collects, uses, and protects your information when you use our Discord bot (the \"Bot\").</p>
            <ol style={{ listStyleType: 'upper-roman' }}>
                <li><b>Information We Collect</b></li>
                <p>When you use our Bot, we may collect:</p>
                <ol style={{ listStyleType: 'lower-roman', marginLeft: '20px' }}>
                    <li>Discord User ID</li>
                    <li>Server ID</li>
                    <li>Command usage data</li>
                    <li>Game-related preferences and settings</li>
                    <li>Messages sent either directly to the bot, or in any server the bot is in</li>
                </ol>

                <li><b>How We Use Your Information</b></li>
                <p>We use the collected information to:</p>
                <ol style={{ listStyleType: 'lower-roman', marginLeft: '20px' }}>
                    <li>Provide and maintain the Bot\'s services</li>
                    <li>Improve user experience</li>
                    <li>Track usage patterns and optimize features</li>
                    <li>Respond to user inquiries and support requests</li>
                </ol>

                <li><b>Data Storage and Security</b></li>
                <p>We implement appropriate security measures to protect your information. Your data is stored securely and is only accessible to authorized personnel.</p>

                <li><b>Data Retention</b></li>
                <p>We retain your data only for as long as necessary to provide our services. You can request deletion of your data at any time through our Discord support server.</p>

                <li><b>Third-Party Services</b></li>
                <p>We do not sell or share your personal information with third parties. The Bot may interact with Discord\'s API and SMITE2\'s API to provide services.</p>

                <li><b>Children\'s Privacy</b></li>
                <p>The Bot is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13.</p>

                <li><b>Your Rights</b></li>
                <p>You have the right to:</p>
                <ol style={{ listStyleType: 'lower-roman', marginLeft: '20px' }}>
                    <li>Access your personal information</li>
                    <li>Request correction of your data</li>
                    <li>Request deletion of your data</li>
                </ol>

                <li><b>Changes to Privacy Policy</b></li>
                <p>We may update this Privacy Policy from time to time. We will notify users of any material changes through our Discord support server.</p>

                <li><b>Contact Us</b></li>
                <p>If you have questions about this Privacy Policy, please contact us.</p>
                <ol>
                    <li>Aboterasu\'s <Link href="https://discord.gg/6FpzxyWAU8" style={{ color: "blueviolet" }}>Discord Support Server</Link></li>
                    <li>thekayaya on Discord</li>
                </ol>
            </ol>
        </div>
    );
}
