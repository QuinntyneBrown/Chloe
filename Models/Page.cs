using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class Page : BaseEntity
    {
        public Page()
        {
            this.ComponentPages = new HashSet<ComponentPage>();
        }

        [ForeignKey("Brand")]
        public int BrandId { get; set; }
        public Brand Brand { get; set; }
        public ICollection<ComponentPage> ComponentPages { get; set; }
    }
}
