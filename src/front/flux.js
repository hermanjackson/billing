import image1 from "../images/image1.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import shutterstock from "../images/shutterstock_375018883.jpg"
import image5 from "../images/account.jpg"
import image6 from "../images/scott-graham-5fNmWej4tAA-unsplash.jpg"
import image7 from "../images/avertimage.jpg"
import image8 from "../images/irwan-iwe-rbDE93-0hHs-unsplash.jpg"
import image9 from "../images/thisisengineering-raeng-pIdteYOzGFY-unsplash.jpg"
import image10 from "../images/credimage.jpg"
import image11 from "../images/codeimg.jpg"
import image12 from "../images/chargeimage.jpg"
import image13 from "../images/payimage.jpg"
import image14 from "../images/claimsimage.jpg"
import image15 from "../images/contractimg.jpg"
import image16 from "../images/denimg.jpg"
import image17 from "../images/acountimg.jpg"
import image18 from  "../images/image18.png"

const  getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		
			product:[
			
				{
					id: 1,
					label:"data Entry",
					description:"",
					image:image1
				},
				{
					id: 2,
					label:"patient billing",
					description:"",
					image:image3
				},
				{
					id: 3,
					label:"insurance payment posting",
					description:"",
					image:image4
				},
				{
					id: 4,
					label:"file claims",
					description:"",
					image:shutterstock
				},
			],
			services:[
				{
					id:5,
					label:"Provider Credentialing",
					description:"CMB Provide comprehensive medical credentialing for all healthcare providers who are eligible for credentialing with Medicare, Medicaid, or commercial insurance carriers. The health care provider will have a dedicated medical credentialing coordinator who will ensure that all necessary documentation is collected and processed in accordance with each payer. Medical credentialing enables healthcare providers to utilize the patient's insurance to pay for medical services performed. Hence it is important for healthcare providers to credentialed with most payers depending upon the geographical area. Failing to medical credentials results in losing patients to other healthcare providerds. ",
					image:image5,
					title:"CMB offer Exclusive Provider Credentialing for all healthcare Providers"
				},
				{
					id:6,
					label:"Charge Entry",
					description:"Charge capture plays a crucial role in Medical Billing. Charge capture or entry is a process of creating clain for a service rendered by the provider to the patient. A clain is the most important aspect for getting reimbursement. Even a minor mistake in charge capture impacts the entire outcome. CMB gives high importance for accurate charge posting in order to submit clean claims. CMB's goal is to get paid at the very first submission and the team relentlessly pushes harder to achieve higher first-pass rate of claims. We are experienced in various Practice Management Systems and various medical specialties. We have predefined rules in charge entry for different medical specialties, which reduces the room for errors and contributes to clean claims.",
					image:image6,
					title:"CMB provide medical coding at a safe and secure practice"
				},
				{
					id:7,
					label:"Payment Posting",
					description:"Accuracy in payment posting and medical billing service is imperative for an optimized revenue cycle.",
					image:image7,
					title:"CMB Offer Payment Posting at a Safe and Secure Practice"

				},
				{
					id:8,
					label:"Claims Submission",
					description:"CMB Submits all claims electronically within 48 hours of charges received time. Electronic claim submission speeds up the process in medical billing.  The clearinghouse prorvides a comfirmation that the claim have reached the payer on time.Electronic claim submission reduces rejections and denials drastically.  CMB submits claims electronically to almost all clearinghouses and familiar with the clearinghouse portals.  Many payers have very strict claims filing time limits  Electronic claim filing helps ot stay on time and  enhance cash flow.  Before the claims are submitted the following checks are made.",
					image:image8,
					title:"CMB Submit all Claims electronically within 48 hours"
				},
				{
					id:9,
					label:"Charge Entry",
					description:"All charges entered are checked for errors.  CMB collects data on common errors and fixes systemic problems that affec payment delays and bad debt, this helps improve collection rates and helpd to protect future cash flow",
					image:image9,
					title:"All charges entered are checked for errors"
				},
 
			],
			allServices:[
				{
					id:10,
					label:"Provider Credentialing",
					description:"CMB Provide comprehensive medical credentialing for all healthcare providers who are eligible for credentialing with Medicare, Medicaid, or commercial insurance carriers. The health care provider will have a dedicated medical credentialing coordinator who will ensure that all necessary documentation is collected and processed in accordance with each payer. Medical credentialing enables healthcare providers to utilize the patient's insurance to pay for medical services performed. Hence it is important for healthcare providers to credentialed with most payers depending upon the geographical area. Failing to medical credentials results in losing patients to other healthcare providerds. ",
					image:image10
				},
				{
					id:11,
					label:"Charge Entry",
					description:"Charge capture plays a crucial role in Medical Billing. Charge capture or entry is a process of creating clain for a service rendered by the provider to the patient. A clain is the most important aspect for getting reimbursement. Even a minor mistake in charge capture impacts the entire outcome. ABC gives high importance for accurate charge posting in order to submit clean claims. CMB's goal is to get paid at the very first submission and the team relentlessly pushes harder to achieve higher first-pass rate of claims. We are experienced in various Practice Management Systems and various medical specialties. We have predefined rules in charge entry for different medical specialties, which reduces the room for errors and contributes to clean claims.",
					image:image12
				},
				{
					id:12,
					label:"Payment Posting",
					description:"Accuracy in payment posting and medical billing service is imperative for an optimized revenue cycle.",
					image:image13
				},
				{
					id:13,
					label:"Claims Submission",
					description:"CMB Submits all claims electronically within 48 hours of charges received time. Electronic claim submission speeds up the process in medical billing.  The clearinghouse prorvides a comfirmation that the claim have reached the payer on time.Electronic claim submission reduces rejections and denials drastically.  CMB submits claims electronically to almost all clearinghouses and familiar with the clearainghouse portals.  Many payers have very strict claims filing time limits  Electronic claim filing helps to stay on time and  enhance cash flow.  Before the claims are submitted the following checks are made.",
					image:image14
				},
				{
					id:14,
					label:"data Entry",
					description:"All charges entered are checked for errors.  CMB collects data on common errors and fixes systemic problems that affec payment delays and bad debt, this helps improve collection rates and helpd to protect future cash flow",
					image:image3
				},
				{
					id:15,
					label:"Medical Coding",
					description:"CMB medicals coders will recognize private payer policies and government regulations for accurate and compliant coding for all healthcare specialties",
					image:image11
				},
				{
					id:16,
					label:"Denial Management",
					description:"CMB is well experienced with working denials trained to identify the root cause of a denial.  CMB can handle denials efficently and effectly.",
					image:image16
				},
				{
					id:17,
					label:"Account Receivable",
					description:"CMB follows up on claims in 30 working days from the claims submission date.  The goals of AR in medical billing services time to achieve the shortest colection as possible.",
					image:image17
				},
				{
					id:18,
					label:"Patient Statement Service",
					description:"Patient statement service is a crucial part of a pract6ice.  Here are the services we offer to keep the patient account receivable low. ",
					image:image4
				},
				{
					id:19,
					label:"Month to Month Contract",
					description:"All our exsting and new clients are month to month.  We work around long term goals within short period the practice will understand how far CMB excels in collectiong your claim payments.  CMB can assure 5 to 10 % increase in revenue within 60 days.",
					image:image15
				},
 
				
			],
		
			
			
	
			
		},
		actions: {
	
		}
	};
};

export default getState;