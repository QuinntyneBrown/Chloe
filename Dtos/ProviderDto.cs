using Models;
using System.Linq;
using System.Collections.Generic;

namespace Dtos
{
    public class ProviderDto
    {
        public ProviderDto(Provider provider)
        {
            this.Id = provider.Id;
            this.Name = provider.Name;
            this.Bundles = provider.Bundles.Select(x => new BundleDto(x)).ToList();
        }

        public ProviderDto()
        {
            this.Bundles = new HashSet<BundleDto>();
        }

        public string Name { get; set; }
        public int Id { get; set; }
        public bool? Checked { get; set; }
        public ICollection<BundleDto> Bundles { get; set; }
    }
}
