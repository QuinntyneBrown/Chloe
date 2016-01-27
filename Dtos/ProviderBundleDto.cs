using Models;

namespace Dtos
{
    public class ProviderBundleDto
    {
        public ProviderBundleDto() { }

        public ProviderBundleDto(Provider provider, Bundle bundle)
        {
            this.ProviderId = provider.Id;
            this.BundleId = bundle.Id;
            this.Bundle = new BundleDto(bundle);
        }

        public int Id { get { return  this.ProviderId + this.BundleId; } }
        public int ProviderId { get; set; }
        public int BundleId { get; set; }
        public BundleDto Bundle { get; set; }
    }
}
