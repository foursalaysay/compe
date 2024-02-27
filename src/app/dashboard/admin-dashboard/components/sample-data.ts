export interface CompanyData {
    image: string;
    company_name: string;
    address: string;
    representative: string;
    contact_number: string;
  }
  
  export const cUsers: CompanyData[] = [
    {
      image: "https://example.com/logo1.png",
      company_name: "ABC Corporation",
      address: "123 Main Street, Cityville, Country",
      representative: "John Doe",
      contact_number: "+1 (555) 123-4567",
    },
    {
      image: "https://example.com/logo2.png",
      company_name: "XYZ Ltd.",
      address: "456 Oak Avenue, Townsville, Country",
      representative: "Jane Smith",
      contact_number: "+1 (555) 987-6543",
    },
    {
      image: "https://example.com/logo3.png",
      company_name: "PQR Industries",
      address: "789 Elm Road, Villagetown, Country",
      representative: "Sam Johnson",
      contact_number: "+1 (555) 321-0987",
    },
  ];
  