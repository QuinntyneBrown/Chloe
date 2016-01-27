using Models;

namespace Dtos
{
    public class BrandProviderDto
    {
        public BrandProviderDto() { }

        public BrandProviderDto(Brand brand, Provider provider)
        {
            this.BrandId = brand.Id;
            this.ProviderId = provider.Id;
            this.Provider = new ProviderDto(provider);
        }

        public int Id {  get { return this.BrandId + this.ProviderId; } }
        public int BrandId { get; set; }
        public int ProviderId { get; set; }
        public ProviderDto Provider { get; set; }
    }
}
