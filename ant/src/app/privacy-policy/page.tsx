import WebsiteContentSection from "@/components/websiteContentSection/page"
import WebsiteContentFlexSection from "@/components/websiteContentFlexSection/page"
import AppLayout from "@/appLayout/page"
import LinkText from "@/components/linkText/page"
export default function PrivacyPolicyPage () {
    return (
        <AppLayout title={'Privacy Policy'}>
            <div className="flex flex-row justify-center items-center">
            <div className="mt-32  2xl:w-[60%] w-[100%]">
          

            <WebsiteContentSection >
            <WebsiteContentFlexSection white
            section1={'Welcome to the ANT Website. These Terms of Service ("Terms") govern your access to and use of our website, services, and products (collectively, "Services"). '}
            section2={'By using our Services, you agree to be bound by these Terms. If you do not agree, do not use our Services.'}
            />
            </WebsiteContentSection> 









            <WebsiteContentSection header={'Information We Collect'} >
            <WebsiteContentFlexSection
            section1={'We collect various types of information to improve our Services, enhance user experience, and maintain security. The information we collect includes '}

            />
            <WebsiteContentFlexSection 
            className="!mt-[-30px]"
            section1={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        - Personal Information
                    </div>
                    <div className="mt-2">
                    We collect personal data that you provide to us voluntarily, such as your name, email address, phone number, billing details, and any other contact information 
                    </div>
                </div>
            }
            section2={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        
                    </div>
                    <div className="mt-8">
                    When you create an account, subscribe to our newsletter, participate in a survey, or communicate with us directly.
                    </div>
                </div>
            }
            />
             <WebsiteContentFlexSection 
            className="!mt-[-30px]"
            section1={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        - Usage Information
                    </div>
                    <div className="mt-2">
                    We collect data regarding your interactions with our website, such as the pages you visit, the features you use, IP addresses, browser type, operating system, device information, 
                    </div>
                </div>
            }
            section2={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        
                    </div>
                    <div className="mt-8">
                    The time spent on different sections of our platform. This data helps us understand user preferences and improve functionality.
                    </div>
                </div>
            }
            />
              <WebsiteContentFlexSection 
            className="!mt-[-30px]"
            section1={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        - Cookies and Tracking Technologies
                    </div>
                    <div className="mt-2">
                    We use <LinkText href={'/cookie-policy'} text='cookies'/>, web beacons, and similar tracking technologies to enhance your browsing experience, analyze traffic trends, and gather insights into user behavior. 
                    </div>
                </div>
            }
            section2={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        
                    </div>
                    <div className="mt-8">
                    You can manage your cookie preferences in your browser settings, though disabling them may affect website functionality.
                    </div>
                </div>
            }
            />
            </WebsiteContentSection> 











































            <WebsiteContentSection header={'How We Use Your Information'} >
            <WebsiteContentFlexSection
            section1={'The data we collect serves several essential purposes, including but not limited to '}

            />
            <WebsiteContentFlexSection 
            className="!mt-[-30px]"
            section1={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        - Marketing and Promotional Activities
                    </div>
                    <div className="mt-2">
                    With your consent, we may send newsletters, promotions, and special offers. You can opt out of these communications at any time.
                    </div>
                </div>
            }
            section2={
                <div>
                <div className="font-[500] text-[#ffffff]">
                    - Security and Fraud Prevention
                </div>
                <div className="mt-2">
                Your information helps us detect and prevent fraudulent activity, unauthorized access, and security breaches.
                </div>
            </div>
            }
            />
           

           <WebsiteContentFlexSection 
            className="!mt-[-30px]"
            section1={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        - Providing and Improving Services
                    </div>
                    <div className="mt-2">
                    We use your information to deliver, manage, and improve our Services, ensuring they function smoothly and meet user expectations.
                    </div>
                </div>
            }
            section2={
                <div>
                <div className="font-[500] text-[#ffffff]">
                    - Communication and Customer Support
                </div>
                <div className="mt-2">
                We may use your email address or phone number to send service-related updates, respond to inquiries, and provide customer support.
                </div>
            </div>
            }
            />

<WebsiteContentFlexSection 
            className="!mt-[-30px]"
            section1={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        - Compliance with Legal Obligations
                    </div>
                    <div className="mt-2">
                    We may process your information to comply with legal and regulatory requirements, including responding to lawful requests from authorities.
                    </div>
                </div>
            }
           
            />
            </WebsiteContentSection> 






















            <WebsiteContentSection header={'Sharing Your Information'} >
            <WebsiteContentFlexSection
            section1={'We respect your privacy and do not sell, rent, or trade your personal information. However, we may share your information under the following circumstances '}

            />
            <WebsiteContentFlexSection 
            className="!mt-[-30px]"
            section1={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        - Business Transfers
                    </div>
                    <div className="mt-2">
                    If our company undergoes a merger, acquisition, or sale of assets, user information may be transferred to the new entity, subject to the terms of this Privacy Policy.
                    </div>
                </div>
            }
            section2={
                <div>
                <div className="font-[500] text-[#ffffff]">
                    - For Legal Compliance
                </div>
                <div className="mt-2">
                We may share information with law enforcement agencies, regulators, or legal representatives when required to comply with laws, enforce our terms, or protect our rights and users.
                </div>
            </div>
            }
            />
           

           <WebsiteContentFlexSection 
            className="!mt-[-30px]"
            section1={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        - With Service Providers
                    </div>
                    <div className="mt-2">
                    We collaborate with third-party vendors and service providers who assist in website hosting, data analytics, payment processing, and other operational needs. These third parties are contractually obligated to protect your data.
                    </div>
                </div>
            }
           
            />


            </WebsiteContentSection> 








































            <WebsiteContentSection header={'Data Security'} >
            <WebsiteContentFlexSection
            section1={'We implement stringent security measures to safeguard your information from unauthorized access, alteration, loss, or disclosure. These include: '}

            />
            <WebsiteContentFlexSection 
            className="!mt-[-30px]"
            section1={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        - Encryption
                    </div>
                    <div className="mt-2">
                    We use encryption protocols to secure sensitive data, such as login credentials and payment information.
                    </div>
                </div>
            }
            section2={
                <div>
                <div className="font-[500] text-[#ffffff]">
                    - Access Controls
                </div>
                <div className="mt-2">
                Only authorized personnel have access to personal information, and they are required to maintain confidentiality.
                </div>
            </div>
            }
            />
           

           <WebsiteContentFlexSection 
            className="!mt-[-30px]"
            section1={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        - Regular Security Audits
                    </div>
                    <div className="mt-2">
                    We conduct periodic security assessments to identify and mitigate potential vulnerabilities.
                    </div>
                </div>
            }

            section2={'Despite our best efforts, no online platform is entirely immune to cyber threats. We encourage users to take precautions, such as using strong passwords and enabling two-factor authentication, to enhance security.'}
           
            />


            </WebsiteContentSection> 










































            <WebsiteContentSection header={'Your Rights and Choices'} >
            <WebsiteContentFlexSection
            section1={'Depending on your location, you may have certain rights regarding your personal information. These may include:'}

            />
            <WebsiteContentFlexSection 
            className="!mt-[-30px]"
            section1={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        - Access and Correction
                    </div>
                    <div className="mt-2">
                    You can request access to the personal data we hold about you and request corrections if needed.
                    </div>
                </div>
            }
            section2={
                <div>
                <div className="font-[500] text-[#ffffff]">
                    - Data Deletion
                </div>
                <div className="mt-2">
                You have the right to request that we delete your personal information, subject to legal and operational constraints.
                </div>
            </div>
            }
            />
           

           <WebsiteContentFlexSection 
            className="!mt-[-30px]"
            section1={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        - Marketing Preferences
                    </div>
                    <div className="mt-2">
                    You can opt out of marketing communications by adjusting your email preferences or clicking the “unsubscribe” link in our emails.
                    </div>
                </div>
            }
            section2={
                <div>
                <div className="font-[500] text-[#ffffff]">
                    - Restricting Data Processing
                </div>
                <div className="mt-2">
                Under certain conditions, you may request restrictions on how we process your data.
                </div>
            </div>
            }
            />



<WebsiteContentFlexSection 
            className="!mt-[-30px]"
            section1={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        - Data Portability
                    </div>
                    <div className="mt-2">
                    You may have the right to receive a copy of your data in a structured, machine-readable format.
                    </div>
                </div>
            }
            section2={
                <div>
To exercise any of these rights, please contact us at <LinkText href={'mailto:Hi@alphanexttech.com?subject=Hello%20there'} text='Hi@alphanexttech.com'/>. We will respond to your request within the timeframe required by applicable laws.'. We will respond to your request within the timeframe required by applicable laws.
                </div>

            }
            />


<WebsiteContentFlexSection 
            className="!mt-[-30px]"
            section1={
                <div>
                    <div className="font-[500] text-[#ffffff]">
                        - Data Portability
                    </div>
                    <div className="mt-2">
                    You may have the right to receive a copy of your data in a structured, machine-readable format.
                    </div>
                </div>
            }
            section2={
                <div>
To exercise any of these rights, please contact us at <LinkText href={'mailto:Hi@alphanexttech.com?subject=Hello%20there'} text='Hi@alphanexttech.com'/>. We will respond to your request within the timeframe required by applicable laws.'. We will respond to your request within the timeframe required by applicable laws.
                </div>

            }
            />

            </WebsiteContentSection> 













            <WebsiteContentSection header={'Third-Party Links'} >
<WebsiteContentFlexSection 
section1={'Our website may contain links to third-party sites for informational or convenience purposes. We do not control the privacy practices of these external websites and are not responsible for their content, policies, or security measures. '}
section2={'We encourage you to review the privacy policies of any third-party sites before providing them with your personal information.'}
/>
            </WebsiteContentSection>






            <WebsiteContentSection header={'Children’s Privacy'} >
<WebsiteContentFlexSection 
section1={'Our Services are not designed for individuals under the age of 18, and we do not knowingly collect personal information from children. If we become aware that a child has provided personal data, we will take appropriate steps to delete it.'}
section2={'Parents or guardians who believe their child has submitted personal information should contact us immediately.'}
/>
            </WebsiteContentSection>




            <WebsiteContentSection header={'Changes to This Privacy Policy'} >
<WebsiteContentFlexSection 
section1={'We may update this Privacy Policy periodically to reflect changes in legal requirements, industry standards, or operational practices. '}
section2={'When we make significant changes, we will notify users by posting an updated version on our website and revising the “Effective Date” at the top of the policy. Your continued use of our Services after the update constitutes acceptance of the revised policy.'}
/>
            </WebsiteContentSection>









            <WebsiteContentSection header={'Contact Information'}>
                <WebsiteContentFlexSection 
                section1={
                    <div>
                        <div>
                        If you have any questions about these Terms, please contact us at 
                        </div>
                        <div className="my-3">
                            <LinkText text='alphanextech@gmail.com.' href={'mailto:alphanextech@gmail.com?subject=Hello%20there'} />
                        </div>
                        <div>
                            <LinkText text='+971557389685' href='#' />
                        </div>
                    </div>
                }
                section2={
                    'We value your privacy and appreciate your trust in us to handle your information responsibly. By using our Services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.'
                }
                />
            </WebsiteContentSection>
            
        </div>
            </div>
         
        </AppLayout>
      
    )
}