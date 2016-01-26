using Data.Contracts;
using Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public class SubscribeToProviderContext: DbContext, IDbContext
    {
        public SubscribeToProviderContext()
            : base(nameOrConnectionString: "subscribeToProviderContext")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Configuration.AutoDetectChangesEnabled = true;
        }

        public DbSet<Provider> Providers { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Bundle> Bundles { get; set; }
        public DbSet<Component> Components { get; set; }
        public DbSet<Page> Pages { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Provider>().

                HasMany(u => u.Bundles).
                WithMany(r => r.Providers).

                Map(
                    m =>
                    {
                        m.MapLeftKey("Bundle_Id");
                        m.MapRightKey("Provider_Id");
                        m.ToTable("BundleProviders");
                    });

            modelBuilder.Entity<Provider>().

                HasMany(u => u.Brands).
                WithMany(g => g.Providers).

                Map(
                    m =>
                    {
                        m.MapLeftKey("Brand_Id");
                        m.MapRightKey("Provider_Id");
                        m.ToTable("BrandProviders");
                    });

        } 
    }
}
