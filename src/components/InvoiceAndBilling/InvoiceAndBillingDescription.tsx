import React from 'react'

type Props = {}

export default function InvoiceAndBillingDescription({ }: Props) {
    return (
        <>
            <div className='w-[62.190201729106626vw] h-[58px] bg-[#F5F5F5] flex gap-[39px] items-center pl-[68px] mt-[43px]'>
                <img src='./alert-circle.svg' alt='' />
                <p className='font-[700] text-[16px] text-[#231414D4] leading-[26.06px]'>You Have no Invoice Yet</p>
            </div>
            <div className='w-[77.23342939481267vw] flex flex-col gap-[30px] mb-[170px] mt-[84px]'>
                <h2 className='font-[700] text-[24px] text-[#231414D4] leading-[39.09px]'>Invoice FAQ</h2>
                <div>
                    <h3 className='font-[700] text-[20px] text-[#231414D4] leading-[32.58px]'>I thought the attendee/ticket buyer was paying the fee. Why did I receive this invoice?</h3>
                    <p className='font-[400] text-[16px] text-[#231414D4] leading-[26.06px]'>We sent you this invoice to collect the partymode Service Fees paid by your attendees for the tickets you sold. When using a third-party payment processor (such as PayPal, Google Checkout, or Authorize.net) or an offline payment method, you receive all payments directly into your account. This includes the partymode Service Fee that your attendees paid (whether the fees were passed on to your attendee or included in the ticket price).</p>
                </div>
                <div>
                    <h3 className='font-[700] text-[20px] text-[#231414D4] leading-[32.58px]'>When is my payment due?</h3>
                    <p className='font-[400] text-[16px] text-[#231414D4] leading-[26.06px]'>Your payment is due within 30 days of the invoice date. The invoice due date is displayed next to the Pay Now button when viewing your invoice on the invoices section of My Account.</p>
                </div>
                <div>
                    <h3 className='font-[700] text-[20px] text-[#231414D4] leading-[32.58px]'>What do the terms in the invoice section of my account mean?</h3>
                    <ul className='pl-[2%]'>
                        <li className='font-[400] list-disc text-[16px] text-[#231414D4] leading-[26.06px]'>Ticket Sales refers to the total amount of sales processed through partymode for a given invoice or event. This number does not include partymode Fees.</li>
                        <li className='font-[400] list-disc text-[16px] text-[#231414D4] leading-[26.06px]'>partymode Fee is a small service fee we charge for every ticket you sell.</li>
                        <li className='font-[400] list-disc text-[16px] text-[#231414D4] leading-[26.06px]'>Invoice Period is the timeframe for which you are being invoiced. party mode sends an invoice at the beginning of each month for fees collected in the previous month.</li>
                        <li className='font-[400] list-disc text-[16px] text-[#231414D4] leading-[26.06px]'>Price is the amount of money that you as the event organizer will receive per ticket. It does not include partymode Fees.</li>
                        <li className='font-[400] list-disc text-[16px] text-[#231414D4] leading-[26.06px]'>Payment Received refers to the amount of money paid by the attendee for an order. This number factors in the ticket price, quantity per ticket, Partymode Fee, and Tax (if applicable).</li>
                        <li className='font-[400] list-disc text-[16px] text-[#231414D4] leading-[26.06px]'>Taxes Collected is the total amount of taxes collected for all orders within an event.</li>
                        <li className='font-[400] list-disc text-[16px] text-[#231414D4] leading-[26.06px]'>Tax refers to the amount of tax charged for a given order. This column only appears when tax has been enabled for an event within your account. See info about charging tax here.</li>
                    </ul>
                </div>

                <div>
                    <h3 className='font-[700] text-[20px] text-[#231414D4] leading-[32.58px]'>How do I see the itemized fees for all of my orders?</h3>
                    <p className='font-[400] text-[16px] text-[#231414D4] leading-[26.06px]'>Click on the invoice number to see invoice details for your event.
                        Can I pay my invoice with my credit/debit card or directly from my bank account?
                        You can pay online using your credit card, debit card, or PayPal account.
                    </p>
                </div>
                <div>
                    <h3 className='font-[700] text-[20px] text-[#231414D4] leading-[32.58px]'>If I don't want to pay this invoice online, can I send you a check in the mail?</h3>
                    <p className='font-[400] text-[16px] text-[#231414D4] leading-[26.06px]'>If you collected payment in US dollars for your event, you can pay by check. For events in all other currencies, you must pay online.
                        For events in US dollars, please make checks payable to partymode with the invoice number and/or your account email address on the check, and include a print out of your invoice.
                        Mail to: Partymode, IncP.O. Box 204845Dallas, TX 75320-4845
                    </p>
                </div>
                <div>
                    <h3 className='font-[700] text-[20px] text-[#231414D4] leading-[32.58px]'>Can I pay all of my invoices at once?</h3>
                    <p className='font-[400] text-[16px] text-[#231414D4] leading-[26.06px]'>If you pay online, you can't pay all of your invoices at once. You'll have to process each invoice separately. If you pay by check, you can write one check for all of your invoices for the full amount. Please include the invoice numbers and/or your account email address on your check and a print out of your invoices, then follow the instructions to pay by check.</p>
                </div>
                <div>
                    <h3 className='font-[700] text-[20px] text-[#231414D4] leading-[32.58px]'>I already sent in a check payment for an invoice. Why did I receive this invoice notification?</h3>
                    <p className='font-[400] text-[16px] text-[#231414D4] leading-[26.06px]'>It takes about 10 business days from the time partymode receives your check for your account to be updated. If you sent your payment for this invoice to us, you can disregard this notice. You'll receive an email confirmation from our billing department when we've received and processed your check payment.</p>
                </div>
                <div>
                    <h3 className='font-[700] text-[20px] text-[#231414D4] leading-[32.58px]'>What happens if I refund a transaction after I pay my invoice?</h3>
                    <p className='font-[400] text-[16px] text-[#231414D4] leading-[26.06px]'>If you refund an order after the invoice has been generated for that month, a fee credit will automatically be applied to the next invoice we issue. If you have no future invoices, reply to this email for assistance.</p>
                </div>
                <div>
                    <h3 className='font-[700] text-[20px] text-[#231414D4] leading-[32.58px]'>How often will I receive an invoice?</h3>
                    <p className='font-[400] text-[16px] text-[#231414D4] leading-[26.06px]'>Partymode sends an invoice at the beginning of each month for fees collected in the previous month. There's no recurring monthly, set-up, or hidden charges. If you don't owe any fees, you won't receive an invoice.</p>
                </div>
            </div>
        </>
    )
}