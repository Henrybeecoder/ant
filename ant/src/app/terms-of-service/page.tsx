import WebsiteContentSection from "@/components/websiteContentSection/page"
import WebsiteContentFlexSection from "@/components/websiteContentFlexSection/page"
import AppLayout from "@/appLayout/page"
import LinkText from "@/components/linkText/page"
export default function TermsOfServicePage () {
    return (
        <AppLayout title={'Terms of service'}>
            <div className="flex flex-row justify-center items-center">
            <div className="mt-32  2xl:w-[60%] w-[100%]">
           <WebsiteContentSection>
            <WebsiteContentFlexSection 
            white
            section1={'Welcome to the ANT Website. These Terms of Service ("Terms") govern your access to and use of our website, services, and products (collectively, "Services"). By using our Services, you agree to be bound by these Terms. If you do not agree, do not use our Services.'}
            />
            </WebsiteContentSection> 

            <WebsiteContentSection header={'Acceptance of Terms'}>
            <WebsiteContentFlexSection 
            section1={'By accessing or using our Services, you confirm that you are at least 18 years old and legally capable of entering into this agreement. If you are using the Services on behalf of an entity, you represent that you have the authority to bind that entity to these Terms.'}
            section2={'These Terms apply to all users of our Services, whether they are registered members or visitors. If you do not meet the eligibility criteria, we reserve the right to restrict or terminate your access. Additionally, certain features or functionalities may require further eligibility verification before granting access.'}
            />
            </WebsiteContentSection> 


            <WebsiteContentSection
            header={'Changes to the Terms'} 
            >
                <WebsiteContentFlexSection 
                section1={'We reserve the right to update these Terms at any time, and such changes will become effective immediately upon posting on our website. We will make efforts to notify users about significant updates, but it is your responsibility to review these Terms regularly.'}
                section2={'Your continued use of our Services after changes are made constitutes acceptance of the updated Terms. If you do not agree with any modifications, you should discontinue use of our Services immediately.'}
                />
            </WebsiteContentSection>





            <WebsiteContentSection
            header={'Use of Our Services'} 
            >
                <WebsiteContentFlexSection
                section1={
                    <div>
                        <p>You agree to use our Services lawfully and in accordance with these Terms. You shall not engage in activities that:</p>
                        <div
                        className="my-3"
                        >- Violate any applicable laws or regulations.</div>
                          <div
                        className="my-3"
                        >- Compromise the security, integrity, or performance of our Services.</div>
                           <div
                        className="my-3"
                        >- Distribute harmful software, spam, or unauthorized advertisements.</div>
                    </div>
                }

                section2={
                    <div>
                           <div
                    className="mb-3"
                    >- Infringe upon the intellectual property rights of others.</div>
                    <div
                    className="mb-3"
                    >- Engage in fraudulent, deceptive, or misleading activities.</div>
                     <div>
                     We reserve the right to monitor user activity and take appropriate action, including restricting access or reporting violations to authorities, if we detect misuse of our Services.
</div>

                    </div>
                   
                 
                }

                >

                </WebsiteContentFlexSection>
            </WebsiteContentSection>




            <WebsiteContentSection
            header={'User Accounts'} 
            >
                <WebsiteContentFlexSection section1={
                     <div>
                     <p>To access certain features, you may be required to create an account. When creating an account, you agree to</p>
                     <div
                     className="my-3"
                     >- Provide accurate and up-to-date information.</div>
                       <div
                     className="my-3"
                     >- Maintain the confidentiality of your login credentials.</div>
                        <div
                     className="my-3"
                     >- Notify us immediately of any unauthorized access or security breaches.</div>
                 </div>
                }

                section2={'We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activities, or pose security risks. We are not responsible for any loss or damages arising from unauthorized account access due to user negligence'}
                 />  
            </WebsiteContentSection>

            <WebsiteContentSection header={'Intellectual Property'}>
<WebsiteContentFlexSection 
section1={'All content, trademarks, logos, and intellectual property on our Services, including text, graphics, software, and design elements, are owned by ANT Website or its licensors. You may not copy, reproduce, distribute, modify, or create derivative works from our content without prior written permission.'}
section2={'Unauthorized use of our intellectual property may result in legal action. If you believe any content on our Services infringes upon your intellectual property rights, please contact us with relevant details so we can investigate and take appropriate action.'}
/>
            </WebsiteContentSection>




            <WebsiteContentSection header={'Privacy Policy'}>
<WebsiteContentFlexSection 
section1={
    <div>
        Your use of our Services is also governed by our <LinkText text={'Privacy Policy'} href='/privacy-policy' />, which explains how we collect, use, and protect your data. By using our Services, you agree to our data practices as outlined in the Privacy Policy.
    </div>
}
section2={'We take user privacy seriously and implement security measures to protect your personal data. However, no online service is completely secure, and we cannot guarantee absolute data protection. Users are responsible for safeguarding their personal information and reporting suspicious activities to us.'}
/>
            </WebsiteContentSection>




            <WebsiteContentSection header={'Third-Party Links'}>
            <WebsiteContentFlexSection 
            section1={'Our Services may contain links to third-party websites for convenience and informational purposes. We do not control or endorse third-party content, and we are not responsible for their privacy policies, terms of service, or business practices.'} 
            section2={'You access third-party sites at your own risk. We encourage users to review external website policies before engaging with them.'}
            />
            </WebsiteContentSection>









            <WebsiteContentSection header={'Disclaimers and Limitation of Liability'}>
            <WebsiteContentFlexSection 
            section1={
                <div>

                <div
              
                >- Our Services are provided "as is" without warranties of any kind, whether express or implied.</div>
                  <div
                className="my-3"
                >- We are not liable for damages resulting from the use or inability to use our Services, including but not limited to data loss, business interruptions, or security breaches.</div>
              
            </div>
            } 
            section2={
                <div>

                <div
              
                >- We do not guarantee uninterrupted, secure, or error-free access to our Services.</div>
                  <div
                className="my-3"
                >To the fullest extent permitted by law, we disclaim liability for indirect, incidental, consequential, or punitive damages. Our maximum liability for any claim arising from these Terms is limited to the amount you paid for our Services, if applicable.</div>
              
            </div>
            }
            />
            </WebsiteContentSection>




            <WebsiteContentSection header={'Governing Law'}>
<WebsiteContentFlexSection 
section1={'These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction]. Any disputes arising from these Terms shall be resolved in the courts of [Insert Jurisdiction].'}
section2={'If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions will continue in effect.'}
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
                    'By using our Services, you acknowledge that you have read, understood, and agreed to these Terms. It is your responsibility to ensure compliance with these Terms throughout your engagement with our Services.'
                }
                />
            </WebsiteContentSection>
        </div>
            </div>
         
        </AppLayout>
      
    )
}